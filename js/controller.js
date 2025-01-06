
var pacientes = [];
var botao = document.getElementById("calcular");
botao.addEventListener('click', function() {
                                    var paciente = lerPaciente();
                                    pacientes.push( paciente ); //adiciona na lista
                                    mostraPaciente( paciente );
});

var botaoRel = document.getElementById("relatorio");
botaoRel.addEventListener('click', function(){
                                    gerarRelatorio( pacientes );
});







