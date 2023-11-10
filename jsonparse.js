const myDetails=
`{
    "name": "sasha",
    "surname": "ngoja",
    "course":"Computer Science"
}`

const data =JSON.parse(myDetails);

console.log(data)
const results = JSON.stringify(data);
console.log(results.toUpperCase())