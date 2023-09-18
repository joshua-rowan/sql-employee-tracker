const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');


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
