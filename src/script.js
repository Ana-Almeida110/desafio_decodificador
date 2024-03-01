var textInput = document.querySelector('.text-area');
var outInput = document.querySelector('.mensagem');

function criptografar() {
    let texto = textInput.value;
    let resultadoCripto = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat'); 
    document.getElementById("mensagem_criptografada").value = resultadoCripto;
}

function descriptografar() {
    let texto = textInput.value;
    let resultadoDescripto = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.getElementById("mensagem_criptografada").value = resultadoDescripto;
}

function copiar() {
    var textoCopia = document.getElementById('mensagem_criptografada');
    textoCopia.select();
    document.execCommand('copy');
    alert('Texto copiado');
    textoCopia.value = ' ';
}

 