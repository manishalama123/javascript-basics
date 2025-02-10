function countdown(n, callback){
    let timer=setInterval(() => {
        console.log(n);
        n--;
        if(n<=0){
            clearInterval(timer);
            callback();
            
        }
    })
}
function timesup(){
    console.log("times up.")
}
countdown(5, timesup);