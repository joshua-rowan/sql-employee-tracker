const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Role = require('./Role');

class Department extends Model {}

Department.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        sequelize,
        timestamps: false
    }
);

Department.hasMany(Role, {
    foreignKey: 'department_id',
});

module.exports = Department;