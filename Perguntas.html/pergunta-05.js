// pergunta-05

function inverteString(str) {
  let novaString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }
  return novaString;
}

const stringOriginal = "Exemplo de string para ser invertida.";

const stringInvertida = inverteString(stringOriginal);

console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
