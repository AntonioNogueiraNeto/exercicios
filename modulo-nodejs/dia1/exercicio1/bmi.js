const readline = require('readline-sync')

const peso = readline.questionFloat('Qual seu peso? ')
const altura = readline.questionInt('Qual sua altura? ')

function calcularimc(peso, altura){
    console.log(`peso ${peso}, altura ${altura}`);

    const alturaemmetros = altura / 100;
    const elevacao = alturaemmetros ** 2

    const imc = peso / elevacao

    return imc


}





function main () {

    const imc = calcularimc(peso, altura)

    console.log(`imc : ${imc.toFixed(2)}`);


    if (imc < 18.5) {
        console.log('Status: Underweight (thin)');
        return;
      }
  
      if (imc >= 18.5 && imc < 25) {
        console.log('Status: Normal weight');
        return;
      }
  
      if (imc >= 25 && imc < 30) {
        console.log('Status: Overweight');
        return;
      }
  
      if (imc >= 30 && imc < 35) {
        console.log('Status: Grade I obesity');
        return;
      }
  
      if (imc >= 35 && imc < 40) {
        console.log('Status: Grade II obesity');
        return;
      }


}

main()