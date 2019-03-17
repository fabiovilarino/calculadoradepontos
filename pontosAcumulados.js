

function somaPontos() {
  acumulado = 0;
  var capturaPontos = document.querySelectorAll(".info-imc");
  for (celula of capturaPontos) {

    acumulado = acumulado + celula.innerText * 1;

  }

  document.getElementsByClassName("pontos-acumulados")[0].innerText = acumulado;

}

