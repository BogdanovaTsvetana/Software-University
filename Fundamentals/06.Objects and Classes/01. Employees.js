function list(input) {
    class Employee {
        constructor(name, persNumber) {
            this.name = name;
            this.persNumber = persNumber;
        }
    }

    let list = [];

    for (let line of input) {
        let name = line;
        let persNumber = name.length;
        let employee = new Employee(name, persNumber);
        list.push(employee);
    }

    list.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.persNumber}`));
}


console.log(list([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]))
