async function addStudent() 
{

    const student = {
        studentId: document.getElementById("studentId").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        department: document.getElementById("department").value,
        year: document.getElementById("year").value,
        cgpa: document.getElementById("cgpa").value,
        address: document.getElementById("address").value
    };

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        alert("Student Added Successfully!");

        console.log(result);

    } catch (error) {

        console.error(error);

        alert("Error adding student");

    }

}
async function loadStudents() {

    const response = await fetch(API_URL);

    const students = await response.json();

    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {

        table.innerHTML += `
                    <tr>
                        <td>${student.studentId}</td>
                        <td>${student.name}</td>
                        <td>${student.email}</td>
                        <td>${student.department}</td>
                        <td>${student.year}</td>
                        <td>${student.cgpa}</td>
                        <td>${student.address}</td>
                    <td>
                        <button onclick="editStudent('${student.studentId}')">Edit</button>
                        <button onclick="deleteStudent('${student.studentId}')">Delete</button>
                    </td>
                    </tr>
                `;

    });

}
async function editStudent(studentId) {

    const name = prompt("Enter New Name");
    const email = prompt("Enter New Email");
    const phone = prompt("Enter New Phone");
    const department = prompt("Enter New Department");
    const year = prompt("Enter New Year");
    const cgpa = prompt("Enter New CGPA");
    const address = prompt("Enter New Address");

    const student = {
        studentId,
        name,
        email,
        phone,
        department,
        year,
        cgpa,
        address
    };

    const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    });

    const result = await response.json();

    alert(result.message);

    loadStudents();
}
async function deleteStudent(studentId) {

    const confirmDelete = confirm("Are you sure you want to delete this student?");

    if (!confirmDelete) {
        return;
    }

    const response = await fetch(API_URL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            studentId: studentId
        })
    });

    const result = await response.json();

    alert(result.message);

    loadStudents();
}