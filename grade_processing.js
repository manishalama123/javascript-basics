const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 65 },
    { name: "Eve", score: 95 }
];
const mappedName = students.map(student => student.name);
console.log(mappedName);

const filterScore = students.filter(student => student.score > 80);
console.log(filterScore);

const totalScore = students.reduce((total, student) => total + student.score, 0);
const averageScore = totalScore / students.length;
console.log(averageScore);