function soma(){

    var numero01 = document.getElementById("number1").valueAsNumber   
    var numero02 = parseFloat(document.getElementById("number2").value)
    var resposta = document.getElementById("respsoma")
    resposta.textContent = numero01 + numero02
    
    }
    
    function divisao(){
    
        var numero03 = document.getElementById("number3").valueAsNumber   
        var numero04 = parseFloat(document.getElementById("number4").value)
        var resposta = document.getElementById("respdiv")
        resposta.textContent = numero03 / numero04
    }
        
    function subtraçao(){
        var numero05 = document.getElementById("number5").valueAsNumber   
        var numero06 = parseFloat(document.getElementById("number6").value)
        var resposta = document.getElementById("respsub")
        resposta.textContent = numero05 +"menos"+ numero06
    }
    function multiplicacao(){
    
        var numero07 = document.getElementById("number7").valueAsNumber   
        var numero08 = parseFloat(document.getElementById("number8").value)
        var resposta = document.getElementById("respsub")
        resposta.textContent = numero07 * numero08
    
    
    
    }