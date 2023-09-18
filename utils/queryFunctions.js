const { Department, Role, Employee } = require('../models');

async function getAllDepartments() {
    try {
        const departments = await Department.findAll();
        return departments;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllDepartments };