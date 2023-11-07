// import { Citizen } from "./citizen";
const {Citizen}= require('./citizen.js');

let resident1 = new Citizen("sasha",26);
resident1.addAddress("Gauteng");
resident1.getDetails();

console.log(resident1.getDetails.toString``)