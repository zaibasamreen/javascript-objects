
// //referntial datatype
// 1. function 
// 2. arrays
// 3. objects

// objects:
//collection of properties

var student = {
    name:"zaiba",
    age: 21,
    mobile:9999444422,
    address:{
        city:"ramanagara", //nested objects: within a object
        state:"karnataka",
        pin:562156
    }

}
console.log(student);
// accessing objects using . notation
console.log(student.name); 
console.log(student.address.city);

//accessing objects using [] notation
console.log(student["age"]); 
console.log(student["address"]["state"]);

//refernce by address:

var student1 = student;
 
student.graduate =true;
console.log(student);

console.log(student1);


//calling the function
var video ={
    name: "hello world",
    play : function() {
        console.log("video played")
       
    },

    timer:[0,5,10]

}

console.log(video.name);
console.log(video.play);
console.log(video.timer[2]);




