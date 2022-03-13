function Chutar(){

    // gerar um numero aleatorio de 0 atpé 10
    var resultado = document.getElementById('resultado')
    var numeroSecreto = Math.floor(Math.random() * 10 + 1)
    var pegarNumero = parseInt(document.getElementById("valor").value);
   

    if(pegarNumero > 10 || pegarNumero < 0){
        resultado.innerHTML = " Necessario informar um numero entre 0 e 10 "
        
    }else if (pegarNumero == numeroSecreto){
        resultado.innerHTML = " Parabéns você acertou o numero secreto é " + numeroSecreto;

    }else{
        resultado.innerHTML = " Você errou o numero secreto é " + numeroSecreto;

    }
   
}
