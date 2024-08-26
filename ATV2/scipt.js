function calc(){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2  = parseFloat(document.getElementById(id2).value)
    var resultado 


    switch (operador){
        case "+":
            resutado = num1 + num2

        break;
        case "-":
            resultado = num1 - num2

        break;
        case "*":
            resultado = num1 * num2
            
        break;
        case "/":
        if(m2 !== 0){
            resultado = num1 / num2
        }
        else {
            resultado = "erro: divisão por 0 não existe"
        }

            break;
            default:
                resultado = "operador inválido"
        


    }
    document.getElementById(respId).textContent = resultado

}