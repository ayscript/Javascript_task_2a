let students = [
    {
        name: "Alice",
        age: 20,
        grade: 85,
        major: "Computer Science"
    },
    {
        name: "Bob", 
        age: 19,
        grade: 92,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        grade: 78,
        major: "Physics"
    }
];

let highPerformers = students.filter(student => student.grade >= 85)

console.log(highPerformers)