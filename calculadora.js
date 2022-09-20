const ADD = require('./adicao');
const SUB = require('./subtracao');
const MULT = require('./multiplicacao');
const prompt = require("prompt-sync")();

class Calculadora{

  constructor(){

    this.numero1 = NaN;
    this.numero2 = NaN;
    this.Strategy ='';
  }

  primeiroNumero(){
    while (isNaN(this.numero1)){
      this.numero1 = parseInt(prompt("Digite o primeiro número?    "));
      this.numero1 = this.numero1/1;
    } 
    return this.numero1
  }

  segundoNumero(){
    while (isNaN(this.numero2)){
      this.numero2 = parseInt(prompt("Digite o segundo número?    "));
      this.numero2 = this.numero2/1;
    } 
    return this.numero2
  }

  getStrategy(){
    while (((this.Strategy.toUpperCase() != "ADD") && (this.Strategy.toUpperCase() != "SUB") && (this.Strategy.toUpperCase() != "MULT")) ){
      this.Strategy = prompt("Digite qual operador aritmética deseja fazer: Add, Sub ou Mult    ");
    }
    return this.Strategy
  }
  
  execute(){
    
    const operacao = eval(` new ${this.getStrategy().toUpperCase()}()`)
    console.log("Resultado: " + operacao.calculate(this.primeiroNumero(), this.segundoNumero()))
    
  }
}
module.exports = Calculadora;