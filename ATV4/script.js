function calcular() {
var p1 = parseFloat(document.getElementById("p1").value)
var a1 = parseFloat(document.getElementById("a1").value)
var resultado = document.getElementById("resultado")
resultado.textContent = (p1 / (a1 * a1)). toFixed(2)
}

