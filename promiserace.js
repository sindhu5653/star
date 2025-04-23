const promise1=new Promise ((res,rej)=>{
    setTimeout(()=>{
        rej('Success 1');
    },5000);
});

const promise2=new Promise ((res,rej)=>{
    setTimeout(()=>{
        rej('Success 2');
    },4000);
});

const promise3=new Promise ((res,rej)=>{
    setTimeout(()=>{
        rej('Success 3');
    },2000);
});

Promise.race([promise1,promise2,promise3])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});