async function fetchData(){
    try {
        let response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data= await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:",error);
        
    }
}

fetchData();