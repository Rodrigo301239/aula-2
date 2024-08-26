function calcular() {
var batata1 = parseFloat(document.getElementById("num1").value)
var batata2 = parseFloat(document.getElementById("num2").value)
var op = document.getElementById("operador").value 
var resultado

switch (op){

    case "+":
        resultado = batata1 + batata2
     break;
    case "-":
        resultado = batata1 - batata2
     break;
        case "/":
            if(batata2 !==0){
            resultado = batata1 / batata2
            }
            else{
                resultado = "erro"
            }
            break;
            case "*":
                resultado = batata1 * batata2
                break;

default:
    resultado = "operador invalido"                
}
document.getElementById("resultado").textContent = resultado


}