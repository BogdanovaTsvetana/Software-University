class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        let param = [username, salary, position, department];
        param.forEach(p => {
            if(p === '' || p === undefined || p === null ) {
                throw new TypeError(`Invalid input!`);
            }
        })

        if(salary < 0) {
            throw new TypeError(`Invalid input!`);
        }

        let employees = [];

        if(departments.hasOwnProperty(department)) {
            employees = this.departments.employees.concat({username, salary, position})
        }
        
        let averageSalary = employees.reduce((sum, e) => sum + e,salary, 0) / employees.length;
       
        this.departments[department] = {department, employees, averageSalary};
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"))
