function getUserData(callback){
    console.log("Data fetching...");
    setTimeout(() => {
        console.log("Waits 2 seconds ⏳...");
        const user= {name:"mfkd", age:56};
        callback(user);
    },2000);

}
function displayUser(user){
    console.log(`User name : ${user.name}`);
}
getUserData(displayUser);