// let array=[1,2,3,4,5]
// let sum=array.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console.log(sum ,'Sum of the array');

// let company={
//     name:'synnefo',
//     place:'kochi',
//     mobile:1234567890,
//     getDetails:function(){
//     }
// }
// company.getDetails()
// console.log(company.name,'this is company name')
// company.course='mernstack'
// console.log(company)
// console.log('getdetails method')


const students=[
    {name:'Alice',scores:[80,90,100]},
    {name:'Bob',scores:[60,70,75]},
    {name:'Charlie',scores:[95,85,80]},
    {name:'David',scores:[40,50,60]}
];

    const studentName=students.filter(student=>{
    const avg=student.scores.reduce((prev,curr)=>prev+curr)/student.scores.length
    return avg>80
    })
    .map(student=>student.name)
    console.log(studentName)
  