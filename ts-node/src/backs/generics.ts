import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Villain, Hero } from "../interfaces";
// import {Hero} from './interfaces/hero';
// import { Villain } from "./interfaces/villain";
// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject('Hola Mundo');

// console.log(genericFunction(3.15256666).toFixed(2));
// console.log(genericFunction('Hola').length);
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.15256666).toFixed(2));
// console.log(genericFunctionArrow('Hola').length);
// console.log(genericFunctionArrow(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade winston wilson',
    dengerLevel: 30
}

console.log(genericFunctionArrow<Villain>(deadpool).dengerLevel);
