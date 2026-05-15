function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function verificarPalindromo() {
  let frase = document.getElementById("frase").value;
  let resultado = document.getElementById("resultado");

  let limpio = normalizar(frase);
  let invertido = "";

  for (let i = limpio.length - 1; i >= 0; i--) {
    invertido += limpio[i];
  }

  if (limpio === invertido) {
    resultado.textContent = "Es palíndromo";
    resultado.className = "text-green-700 bg-green-100 p-4 rounded-xl text-center";
  } else {
    resultado.textContent = "No es palíndromo";
    resultado.className = "text-red-700 bg-red-100 p-4 rounded-xl text-center";
  }
}