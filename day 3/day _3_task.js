// Array of student objects
const students = [
  {
    name: "Rahul",
    english: 85,
    maths: 92,
    science: 78
  },
  {
    name: "Priya",
    english: 90,
    maths: 81,
    science: 86
  },
  {
    name: "Amit",
    english: 65,
    maths: 72,
    science: 70
  }
];

// Loop through each student
students.forEach(student => {
  let total = student.english + student.maths + student.science;
  let average = total / 3;

  let grade;
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else grade = "Fail";

  // Print result
  console.log("🎓 Student Result");
  console.log("Name    : " + student.name);
  console.log("English : " + student.english);
  console.log("Maths   : " + student.maths);
  console.log("Science : " + student.science);
  console.log("Total   : " + total);
  console.log("Average : " + average.toFixed(2));
  console.log("Grade   : " + grade);
  console.log("-----------------------");
});
