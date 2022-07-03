function companyUsers(input) {
    let listCompanies = {};

    input.forEach(line => {
        let [compamyName, id] = line.split(' -> ');

        if (!listCompanies.hasOwnProperty(compamyName)) {
            listCompanies[compamyName] = new Set();
        }

        listCompanies[compamyName].add(id);
    });

    // sort
    let listEntries = Object.entries(listCompanies)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(kvp => [kvp[0], Array.from(kvp[1])])

    // print
    for (let kvp of listEntries) {
        console.log(kvp[0]);
        kvp[1].forEach(id => console.log(`-- ${id}`))
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
