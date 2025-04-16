const promise=new promise((resolve,reject)=>{
    fetch('https://dummyjson.com/docs/products')
    .then((response)=>{
        resolve (response.json());
    })
    .catch ((error)=>{
        reject(error);
    })
});
console.log(promise,'Before its execution');

promise 
.then((data)=>{
    console.log(data);
    console.log('Promise resolved');
})
.catch((result)=>{
    console.log(result);
    console.log('Promise rejected');
    
});
