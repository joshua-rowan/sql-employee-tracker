const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Department = require('./Department');
const Employee = require('./Employee');

class Role extends Model {}

Role.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        sequelize,
        timestamps: false
    }
); 

Role.belongsTo(Department, {
    foreignKey: 'department_id',
    as: 'department',
});

Role.hasMany(Employee, {
    foreignKey: 'role_id',
});

module.exports = Role;