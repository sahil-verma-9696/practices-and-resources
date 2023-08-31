//                   asyncronous java script
//*********** call back function *****************************

const display = (data) => {
    alert(data);
}

const greeting = (greet) => {

    const greetFun = (greet) => {
        display(greet); 
    }
    setTimeout(greetFun(greet), 2 * 1000);

}

greeting("good morning")

//******************** promises ********************

//   ***** declaring or creating  a primise ***** 

const promises = new Promise((resolve,reject)=>{
    // an asynchronous code that give resolve or reject
    let value = prompt("mention the desion resolve or reject ");
    const data = {
        name:"sahil",
        age:19
    }
    if(value === "resolve"){
        return resolve(data);
    }else{
        reject("the user reject for giving data");
    }
})

// ************** use the promise ***********

promises.then(
    (data)=>{
        console.log(data);
    },
    (error)=>{
        console.log(error)
    }
)

// **************** fetching api using promises ***************

const apix = fetch("https://jsonplaceholder.typicode.com/todos/1")
apix.then(
    data=>{
        return data.json();
    }
).then(
    data=>{
        console.log(data)
    }
)

// ************** async & await keywords ***********************

const api = async ()=>{

    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    
    let fetchedData = await data.json();

    console.log(fetchedData)
}

// calling this asynchronous function 
api();