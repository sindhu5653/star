const newFunction =async()=>{
    try{
        const result=await fetch('https://dummyjson.com/products');
        const data=await result.json();
        console.log(products);
    }
    catch(err){
            console.log('Error frtching user',err);
        }
}