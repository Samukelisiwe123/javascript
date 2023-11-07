//Let's create a constructor function
function Person(name, age){ //parent
    this.name = name;
    this.age = age;
}

//Then we create two person object

let john = new Person("John",23); //inheritance
let jane = new Person("Jane",19);

console.log(john);
console.log(jane);


let thoko ={
    'name' : 'Thoko',
    'age' : 25
}


//polymophic
function Students(name,age,course){
    this.name=name;
    this.age=age;
    this.course = course;

}

let lydia = new Students(thoko.name,thoko.age, "Full Stack");
console.log(lydia.course)
