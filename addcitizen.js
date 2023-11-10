// // import { Citizen } from "./citizen";
// const {Citizen}= require('./citizen.js');


// // Importing data from db.json (assuming it contains valid JSON)
// const data = require('./db.json');

// console.log(data);









// let resident1 = new Citizen("sasha",26);
// resident1.addAddress("Gauteng");
// resident1.getDetails();

// console.log(resident1.getDetails.toString``)





const Student = {
    name:'Steve',
    age:17,
    course: 'ICT',
    module: 'Technical Programming II'
};

const Student2 = {
    name:'Samdra',
    age:16,
    course: 'ICT',
    module: 'Technical Programming I'
};


const fs = require('fs');

function writeData(obj){

    fs.appendFile('./db.json',JSON.stringify(obj),err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('success')
        }
    })
}

function readData(){
    fs.readFile('./db.json','utf-8', (err,jsonString) => {
        if(err){
            console.log(err)
        }
        else{
            try{
                const data=JSON.parse(jsonString);
                console.log(data);
                console.log('success');
            }
            catch(error){
                console.log('Error parsing JSON', err)
            }
        }
    });
}

writeData(Student);
readData();
