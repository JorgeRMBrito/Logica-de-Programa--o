alert ("Bem vindo ao jogo do Número Secreto");

let numeroSecreto = parseInt(Math.random ()* 10); //parseInt() -> pega o numero inteiro do float
//let numeroSecreto = 10;
let chute;
let cont = 1;
console.log (numeroSecreto);

while (chute != numeroSecreto) {
    chute = prompt ("Qual é o número secreto");

    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute < numeroSecreto) {
            alert (`O número secreto é maior que ${chute}`);
        }
        else {
           alert (`O número secreto é menor que ${chute}`);
        }
    }

    cont ++;

}
// operador ternário: funciona com if 
let palavraTentativa = cont > 1 ? "tentativas" : "tentativa";
alert (`Parabéns. Você acertou o número secreto ${numeroSecreto} em ${cont} ${palavraTentativa}`);