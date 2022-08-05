// RESETANDO DATAS

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var horas = String(data.getHours()).padStart(2, '00');
var second = data.getMinutes();

dataAtual = '<p class="date">Dia: ' + dia + '/' + mes + '/' + ano + ' às ' + horas + ':' + second + ' horas</p>';

// SORTEIO DE NOMES

let modal = document.getElementById('modal-sorteio')

function sorteio() {

  let painel = document.getElementById('resposta');
  let resposta = document.getElementById('inputRanomNames').value.trim();

  usu = resposta.split(/\s+/);
  let ganhador = usu[Math.floor(Math.random() * usu.length)];


  // MODAL 

  modal.style.display = "flex"
  
  // SE ESTIVER CAMPO VAZIO
  if(resposta == ''){

    alert("Digite um valor");

  }
  else{

    painel.innerHTML = "<h2><b>" + ganhador + "</b> ganhou um</h2>";

    document.getElementById('dateANDhours').innerHTML = dataAtual
  }
  
}

function fechar(){
  modal.style.display = "none"
}

// SORTEIO DE NÚMEROS

function sorteioNumbers(){

  modal.style.display = "flex"

  var min = parseInt(document.getElementById("minimo").value, 10);
  var max = parseInt(document.getElementById("maximo").value, 10);

  let sort = Math.floor(Math.random() * (max - min) + min)

  if(sort == ''){

    alert("Digite um valor");

  }
  else{

    document.getElementById("result").innerHTML= '<h2>Número <b>' + ++sort + '</b> ganhou um</h2>';
  ;

  document.getElementById('dateANDhours').innerHTML = dataAtual
  }

}

