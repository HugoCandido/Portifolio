function validarIdade(idade) {
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar =  false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade ?");
console.log(validarIdade(idade));