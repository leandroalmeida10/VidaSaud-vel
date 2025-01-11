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
    listaNumerada.innerHTML = ""; 

    pacientes.forEach(paciente => {
                                var imc = calculaIMC( paciente.peso, paciente.altura);
                                var sit = verificaIMC( imc );
                                listaNumerada.innerHTML += `<li> ${paciente.nome} - IMC ${imc.toFixed(2)} - Situação: ${sit}</li>`;
        
    });
}

function mascPeso(input) {
    var value = input.value;

    value = value.replace(/\D/g, "");

    if (value.length > 1) {
        var integerPart = value.slice(0, -1); 
        var decimalPart = value.slice(-1);   
        value = `${integerPart}.${decimalPart}`;
    }

    input.value = value;
}

function mascAltura(input) {
    var value = input.value;

    value = value.replace(/\D/g, "");

    if (value.length > 1) {
        let integerPart = value.slice(0, 1);  
        let decimalPart = value.slice(1);    
        value = `${integerPart}.${decimalPart}`;
    }

    if (value === "") {
        input.value = "";
        return;
    }
    
    
    if (value.includes(".")) {
        value = value.substring(0, value.indexOf(".") + 3);
    }
    
    input.value = value;
}