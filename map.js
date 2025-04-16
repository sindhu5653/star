const students = [
    { name: 'Alice', scores: [80, 90, 100] },
    { name: 'Bob', scores: [60, 70, 75] },
    { name: 'Charlie', scores: [95, 85, 80] },
    { name: 'David', scores: [40, 50, 60] }
];
const array = students.map(student => {
    const avg = student.scores.reduce((prev, curr) => prev + curr) / student.scores.length
    return { student: student.scores.reduce((prev,curr) => prev+curr), avg }
})
console.log(array)


let combinedScores=students.map((item)=>{
    return item.scores.reduce((prev,curr)=>prev+curr)
})


console.log(combinedScores,'============');

let averageOfTotalScores=combinedScores.reduce((prev,curr)=>prev+curr/combinedScores.length)

console.log(averageOfTotalScores,'total average of all students');
