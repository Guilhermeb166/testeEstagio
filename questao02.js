function Fibonacci(num) {
  let num1 = 0;
  let num2 = 1;
  let temp;

  if (num === num1 || num === num2) {
    return `${num} pertence à sequência de Fibonacci.`;
  }

  while(b<num){
    temp = num1 +num2
    num1 = num2
    num2 = temp
  }

  if(num2 === num){
    return `${num} pertence à sequência de Fibonacci.`
  }else{
    return `${num} não pertence à sequência de Fibonacci.`
  }
}
const numero = 0
console.log(Fibonacci(numero));

