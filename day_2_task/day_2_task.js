// Array of student marks
const marks = [85, 92, 78, 95, 88];

// Find highest marks
let highest = marks[0]; // assume first element is highest

for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
}

// Print result
console.log("Marks:", marks);
console.log("Highest Marks:", highest);
