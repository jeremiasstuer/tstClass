import { Usuario } from "./usuario";

let readLine = require("readline-sync");

console.log("Casino las flores")
const name = readLine.question(`Cual es tu nombre?\n`)

const age = readLine.question(`Cuantos anos tienes?\n`)

const usu1 = new Usuario(name,age)

usu1.confirmName(name)
usu1.confirmAgre(age)

