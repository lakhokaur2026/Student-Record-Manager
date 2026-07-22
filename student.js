import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "students.json");

const data = fs.readFileSync(filePath, "utf-8");
const students = JSON.parse(data);
// create , read and write 
function addStudent(name, rollNo, course) {
    students.push({
        name,
        rollNo,
        course
    });

    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
    console.log("Student Added Successfully!");
}

function viewStudents() {
    console.log(students);
}

// search 
function searchStudent(rollNo) {
    const student = students.find((s) => s.rollNo === rollNo);

    if (student) {
        console.log(student);
    } else {
        console.log("Student Not Found!");
    }
}
// update 

function updateStudent(rollNo, newCourse) {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].rollNo === rollNo) {

            students[i].course = newCourse;

            found = true;

            break;
        }
    }

    if (found) {
        fs.writeFileSync(filePath, JSON.stringify(students, null, 2));
        console.log("Student Updated Successfully!");
    } else {
        console.log("Student Not Found!");
    }
}

// delete 
function deleteStudent(rollNo) {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].rollNo === rollNo) {

            students.splice(i, 1);

            found = true;

            break;
        }
    }

    if (found) {

        fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

        console.log("Student Deleted Successfully!");

    } else {

        console.log("Student Not Found!");

    }

}

export { addStudent, viewStudents, searchStudent,updateStudent,deleteStudent };
