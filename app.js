import { addStudent, viewStudents, searchStudent,updateStudent,deleteStudent } from "./student.js";

// addStudent("Lakho", 101, "CSE");
// viewStudents();

// searchStudent(101);

// updateStudent(101, "AI & ML");
// viewStudents();

// deleteStudent(101);
// viewStudents();




const command = process.argv[2];
const name = process.argv[3];
const rollNo = Number(process.argv[4]);
const course = process.argv[5];

if (command === "add") {
    addStudent(name, rollNo, course);
}
else if (command === "view") {
    viewStudents();
}
else if (command === "search") {
    searchStudent(rollNo);
}
else if (command === "update") {
    updateStudent(rollNo, course);
}
else if (command === "delete") {
    deleteStudent(rollNo);
}
else {
    console.log("Invalid Command!");
}