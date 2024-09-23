var http = require("http");

// To import the Employee Module
const Employee = require("./Employee"); 
console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        return;
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html'); 
        res.end("<h1>Welcome to Lab Exercise 03</h1>");            //Display Message
        return;
    }

    if (req.url === '/employee') {
        const employees = Employee.getAllEmployees();
        res.end(JSON.stringify(employees));                        // Display details of all employees
        return;
    }

    if (req.url === '/employee/names') {
        const employeeNames = Employee.getEmployeeNames();
        res.end(JSON.stringify(employeeNames));                    //Display "firstName + lastName" of employee in ascending order 
        return;
    }

    if (req.url === '/employee/totalsalary') {
        const totalSalary = Employee.getTotalSalary();
        res.end(JSON.stringify({ total_salary: totalSalary }));    //Display total salary of all employees
        return;
    }

    res.statusCode = 404;
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
