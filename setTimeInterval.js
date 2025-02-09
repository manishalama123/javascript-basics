function countDown(){
    let count=10;
    let timer=setInterval(()=>{
        console.log(count);
        count--;
        if (count<0){
            console.log("times up");
            clearInterval(timer);
        }
    },1000);
}
countDown();