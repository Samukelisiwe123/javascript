let courses = ["React","Anglar 2","Javascript","HTML "];

courses[3]="time";
console.log(courses);

//verifying code 
console.log(typeof courses) //Array to return object

//to return strictly an Array
console.log(courses instanceof Array)
//======================================================


let learners = new Array(3);

learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5;

console.log("No of Learners: "+learners);

let len = courses.length;

let space="";
let i= 0;
for(;i<len;){

space +=courses[i] + ' '

i++
}

console.log(space)