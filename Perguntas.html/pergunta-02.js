// pergunta 2

function verificaSequenciaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let c;

  if (numero === 0 || numero === 1) {
    console.log("O número informado pertence à sequência de Fibonacci.");
    return;
  }

  while (a + b <= numero) {
    c = a + b;
    a = b;
    b = c;

    if (c === numero) {
      console.log("O número informado pertence à sequência de Fibonacci.");
      return;
    }
  }

  console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

const numeroVerificar = 21;

verificaSequenciaFibonacci(numeroVerificar);
