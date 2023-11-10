


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

    fs.appendFile('./data.json',JSON.stringify(obj),err=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('success')
        }
    })
}

function readData(){
    fs.readFile('./data.json','utf-8', (err,jsonString) => {
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