const axios = require('axios');

axios.get('http://localhost:3000/users')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        });
    })
    .catch(error => {
        console.log(error);
    });


    
    axios.post('http://localhost:3000/users', {
    id: 6,
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@gmail.com'
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});

axios.put('http://localhost:3000/users/6/', {
    first_name: 'Fred',
    last_name: 'Blair',
    email: 'freddyb34@yahoo.com'
}).then(resp => {

    console.log(resp.data);
}).catch(error => {

    console.log(error);
});