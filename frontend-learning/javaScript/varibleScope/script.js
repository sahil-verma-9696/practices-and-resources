// ********** scope of variable ************************

//var is functional scoped 

/* let fun = () => {

    var name = "sahil";

    for (var i = 0; i < 5; i++) {
        console.log("for loop = " + i);
        console.log("for loop = " + name);
        var sirName = "verma";
    }

    function fun1() {
        console.log("inside fun of fun = " + name);
        console.log("inside fun of fun = " + sirName);

        function fun2(){
            console.log("fun2 = "+ name)
        }

        fun2();
    }

    fun1()
    
    console.log(name);
    console.log(i);
    console.log(sirName);

}

fun();*/

// from the above example we learn that "var" is functional scoped var is inside function is use any where.

// **************** | let | and | const | are braces {} scoped 

/*let fun = () => {

    // var name = "sahil";
    let name = "sahil";

    // for (var i = 0; i < 5; i++) {
    for (let i = 0; i < 5; i++) {// variable is valide for only this braces only !!!
        console.log("for loop = " + i);
        console.log("for loop = " + name);
        var sirName = "verma";
    }

    function fun1() {
        console.log("inside fun of fun = " + name);
        console.log("inside fun of fun = " + sirName);

        function fun2(){
            console.log("fun2 = "+ name)
        }

        fun2();
    }

    fun1()
    
    console.log(name);
    // console.log(i);// this line create an error show i is not-define
    console.log(sirName);

}

fun();*/

// ******* spread operator **********************

// let arr = [1,2,3,4,5]

// let  arr2 = arr; // its line mean we take the refference of "arr"

// arr2.pop() // means on removing "arr2" element,
// // the element of "arr is also removed";


// // if you want to prevent this stuff

// // use spread operator 

// // example 

// let arr3 = [...arr] // spread operator on array same thing happend with object 

// // let obj = {name:"sahil"}
// // let obj2 = {...obj}
// // obj2.name = "santanu"

// arr3.pop()
