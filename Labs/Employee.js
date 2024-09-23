let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

// Function to get all employees details
function getAllEmployees() {
    return employees;
}

// Function to get all employee names in ascending order
function getEmployeeNames() {
    return employees
        .map(emp => `${emp.firstName} ${emp.lastName}`)
        .sort();
}

// Function to get the total salary of all employees
function getTotalSalary() {
    return employees.reduce((total, emp) => total + emp.Salary, 0);
}

module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};