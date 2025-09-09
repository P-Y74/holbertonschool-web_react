interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Alice",
    lastName: "Dupont",
    age: 22,
    location: "Paris"
}

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    location: "Lyon"
}

const studentList: Student[] = [student1, student2];

function createTable(studentList: Student[]) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let headerRow = document.createElement('tr');

    const headers: string[] = ['firstName', 'location'];
    headers.forEach(headerText => {
        let header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(thead);
    thead.appendChild(headerRow);
    table.appendChild(tbody);

    studentList.forEach(student => {
        let row = tbody.insertRow();
        let firstNameCell = row.insertCell(0);
        firstNameCell.textContent = student.firstName;
        let locationCell = row.insertCell(1);
        locationCell.textContent = student.location;
    });

    document.body.appendChild(table);
}
createTable(studentList);
