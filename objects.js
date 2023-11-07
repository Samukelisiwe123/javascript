let school={
    name: "Simunye Primary School",
    location: "Gauteng",
    established: "2001",
    20:1000,


    displayInfo: function(){
       return console.log(`Welcome to ${school.name} located at ${school.location} 
        which was esbablished in the year ${school.established} having rating of ${school[20]}`)
    }
}

school.displayInfo();