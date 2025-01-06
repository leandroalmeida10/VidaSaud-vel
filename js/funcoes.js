function calculaIMC(peso, altura){
    var imc = peso / (altura**2);
    return imc;
}

function verificaIMC( imc ){
    var situacao = null;                                        //inicia variavel sem valor

//if situação

if( imc < 18.5){
    situacao = "Magreza";
}else if ( imc >= 18.5 && imc <= 24.9){
    situacao = "Normal";
}else if ( imc > 24.9 && imc <= 30){
    situacao = "Sobrepeso";
}else{
    situacao = "Obesidade"
}

return situacao;
}

function mostraPaciente( paciente ){
    var imc = calculaIMC(paciente.peso, paciente.altura);
    var situacao = verificaIMC( imc );

    var spanNome = document.getElementById("nome");             // no index.html vai aparecer o valor da variável nome aqui nomeada <span id="nome">spanNome</span>
    spanNome.innerHTML = paciente.nome;

    var spanPeso = document.getElementById("peso");             // no index.html vai aparecer o valor da variável nome aqui nomeada <span id="peso">spanPeso</span>
    spanPeso.innerHTML = paciente.peso;

    var spanAltura = document.getElementById("altura");         // no index.html vai aparecer o valor da variável nome aqui nomeada <span id="altura">spanAltura</span>
    spanAltura.innerHTML = paciente.altura;

    var spanIMC = document.getElementById("imc");               // no index.html vai aparecer o valor da variável nome aqui nomeada  <span id="imc">spanIMC</span>
    spanIMC.innerHTML = imc.toFixed(2);

    var spanSituacao = document.getElementById("situacao");     // no index.html vai aparecer o valor da variável nome aqui nomeada  <span id="spanSituacao">spanIMC</span>
    spanSituacao.innerHTML = situacao;

}

function lerPaciente(){

    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente = {
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value
    }

    return paciente;
}

function gerarRelatorio ( pacientes ){
    var listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = ""; //limpa a lista

    pacientes.forEach(paciente => {
                                var imc = calculaIMC( paciente.peso, paciente.altura);
                                var sit = verificaIMC( imc );
                                listaNumerada.innerHTML += `<li> ${paciente.nome} - Situação: ${sit}</li>`;
        
    });
}