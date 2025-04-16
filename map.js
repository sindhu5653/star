const students=[
    {name:'Alice',scores:[80,90,100]},
    {name:'Bob',scores:[60,70,75]},
    {name:'Charlie',scores:[95,85,80]},
    {name:'David',scores:[40,50,60]}
];
    const Array=students.map(student=>{
    const avg=student.scores.reduce((prev,curr)=>prev+curr)/student.scores.length
    return {student,avg}
    })
    console.log(Array)