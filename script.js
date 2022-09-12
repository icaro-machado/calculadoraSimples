function resultadoOperacao() {

    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);

    var n3 = document.querySelector('#operador').selectedOptions[0].id;

    switch (n3) {
        case 'soma':
            var result = (n1 + n2).toFixed(2);
            document.getElementById("resultado").innerHTML = result;
            break;
        case 'subtracao':
            var result = (n1 - n2).toFixed(2);
            document.getElementById("resultado").innerHTML = result;
            break;
        case 'multiplicacao':
            var result = (n1 * n2).toFixed(2);
            document.getElementById("resultado").innerHTML = result;
            break;
        case 'divisao':
            var result = (n1 / n2).toFixed(2);
            document.getElementById("resultado").innerHTML = result;
            break;
        default:
            break;
    }  
}