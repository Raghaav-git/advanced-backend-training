// Day 1 - JavaScript Fundamentals

// Variables
var city = "Bangalore";
let year = 2026;
const course = "Backend Training";

// Normal Function
function greet(name) {
    return "Hello " + name;
}

// Arrow Function
const add = (a, b) => {
    return a + b;
};

// Arrays & Objects
const students = [
    { id: 1, name: "Raghav", active: true },
    { id: 2, name: "Subhash", active: false },
    { id: 3, name: "Triloki", active: true }
];

// Using filter
const activeStudents = students.filter(student => student.active);

// Using map
const studentNames = students.map(student => student.name);

// Using reduce
const totalStudents = students.reduce((count, student) => count + 1, 0);

console.log(greet("Raghav"));
console.log("Addition:", add(5, 3));
console.log("Active Students:", activeStudents);
console.log("Student Names:", studentNames);
console.log("Total Students:", totalStudents);