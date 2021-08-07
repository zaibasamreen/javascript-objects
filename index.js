
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
student.gender="female";
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



// let a=false;
// if (a){
//     console.log("this is false");
// }
// console.log(a);

//array of objects using loop

var fruits =[
    {
        fruit1:"mango",
        color:"yellow-green",
        location:"nagpur",
        rate:50,
     },
     {
         fruit2:"apple",
         color:"red",
         location:"kashmir",
         rate:80,
     },
     {
         fruit3:"oranges",
         color:"orange",
         location:"nagaland",
         rate:40,

     },
      {
          fruit4:"grapes",
          color:"black",
          location:"amazon",
          rate:50,

      },
      
]
console.log(fruits);

for( let i=0; i<=fruits.length-1; i++)
{
   
        console.log(fruits[i]);
    
}

// array of objects using loop

var data =[ "zaiba samreen",2001,"computer science","ramanagara",562159,"karnataka","India"]
for(i=0; i<=data.length-1; i++)
{
    console.log(data[i]);
}






