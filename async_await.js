function FetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let result=true;
            if(result){
                resolve("Success");

            }
            else{
                reject("UNsuccess");
            }

        },2000);
    });
}

async function getUserData(){
    try {
        let data=await FetchUserData();
        console.log(data);

    } catch (error) {
        console.log(error);
        
    }
}
getUserData();