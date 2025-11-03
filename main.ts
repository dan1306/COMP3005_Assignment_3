require('dotenv').config();

const readline = require("readline-sync");

interface addStudent {
  first_name: string; 
  last_name: string; 
  email: string; 
  enrollment_date: Date;
}

// while (true) {
//   const input = readline.question("Enter something (or type exit): ");

//   if (input === "exit") {
//     console.log("Goodbye!");
//     process.exit(0);
//   }

//   console.log("You typed:", input);
// }

const { pool } = require("./db/index");

async function main() {
  const result = await pool.query("SELECT * FROM students;");
  console.log(result.rows);
}

async function getAllStudents(){
  const result = await pool.query("SELECT * FROM students;");
  console.log(result.rows); 
}

async function addStudent({first_name, last_name, email, enrollment_date}:addStudent) {
  await pool.query(
    `INSERT INTO students (first_name, last_name, email, enrollment_date)
     VALUES ($1, $2, $3, $4)`,
    [first_name, last_name, email, enrollment_date]
  );
}

async function updateStudentEmail(student_id, new_email) {
await pool.query("UPDATE students SET email = $1 WHERE student_id = $2"),
[student_id, new_email]
} 

async function deleteStudent(student_id){
  await pool.query("DELETE FROM students WHERE student_id = $1",
    [student_id]
  )
}
main();

