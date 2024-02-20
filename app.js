
function encriptarTexto () {

    let textoEncriptado = document.getElementById('entradaTexto').value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat"); // la /a/ representa la coincidencia que se busca, g indica que la busqueda sea global y no se detenga en la primer coincidencia, y ai es lo que queremos reemplazar
    console.log(textoEncriptado);   
    let textArea = document.getElementById('salidaTexto');
    textArea.innerHTML = textoEncriptado;
    return textoEncriptado;

}

function desencriptarTexto() {

    let textoDesencriptado = document.getElementById('entradaTexto').value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    console.log(textoDesencriptado);
    let textArea = document.getElementById('salidaTexto');
    textArea.innerHTML = textoDesencriptado;
    return textoDesencriptado;
    
}

function copiar() {
    let portaPapeles = document.getElementById('salidaTexto').value;
    navigator.clipboard.writeText(portaPapeles);// este comando te permite copiar en el portapapeles
}





