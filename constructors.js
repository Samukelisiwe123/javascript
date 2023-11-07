const student={
    //data prperty

    details:{
    firstName: 'Steve',
    surname: 'Shongwe',
    age: 22,
    contact:'011 2345 3434'
    },

    //accessor property(getter)
    get getName(){
        return this.details.firstName;
    },

    // get getDetails(){
    //     return this.student.details
    // },


    //accessor property(setter)
    set changeName(newName){
        this.details.firstName=newName;
    }
    
}

//call all infomation
console.log(student.details)

console.log(student.details.firstName)
console.log(student.getName)


student.changeName="Ashante";

console.log(student.details)