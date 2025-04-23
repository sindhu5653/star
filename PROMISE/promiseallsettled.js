const promise1=new Promise ((res,rej)=>{
    setTimeout(()=>{
        res('Success 1');
    },500);
});

const promise2=new Promise ((res,rej)=>{
    setTimeout(()=>{
        res('Success 2');
    },3000);
});

const promise3=new Promise ((res,rej)=>{
    setTimeout(()=>{
        res('Success 3');
    },2000);
});

Promise.allSettled([promise1,promise2,promise3])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});