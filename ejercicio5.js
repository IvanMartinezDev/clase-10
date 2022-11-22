let edad;
let sexo;
edad = prompt("Introduce tu edad");
sexo = prompt("Eres hombre o mujer?");
if (sexo == "hombre" && edad >= 18 ){
    alert("Puedes entrar, eres mayor de edad.");
} else if (sexo == "mujer" && edad >= 20) {
    alert("Puedes entrar, eres mayor de edad.");
} else {
    alert("No puedes entrar, eres menor de edad.");
}