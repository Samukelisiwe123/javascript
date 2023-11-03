// let val = 1;



// while(val<10){
//     console.log(val);
//     val+=2
// }

const courses = ['Computer Science','Software Engineering', 'Database','Computer Literacy']


let i=0;

let len= courses.length;

let devops = "";

for(;i <len;){
    devops +=courses[i + '']+'\n'
    i++;
}
console.log(devops);