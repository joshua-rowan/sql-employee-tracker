const express = require('express');
const sequelize = require('./config/connection');

const models = require('./models');
const { Department, Employee, Role } = models;
const { startScript } = require('./utils/promptScript'); // Import the startScript function

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on ${PORT}`);
        // Call the startScript function to initiate the Inquirer prompt
        startScript();
    });
}).catch((err) => {
    console.error('Error syncing database:', err);
});
