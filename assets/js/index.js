let keys =[["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

document.getElementById("btn-encrypt").addEventListener("click", encrypt);
document.getElementById("btn-decrypt").addEventListener("click", decrypt);

function encrypt(){
    let textoEncriptado = document.getElementById("textoPlano").value;

    if (validarRestriccion(textoEncriptado)) {
        
        for (let i = 0; i < keys.length; i++) {
            if (textoEncriptado.includes(keys[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(keys[i][0], keys [i][1]);
            }
        }
        
        mostrarEncrypt(textoEncriptado);
    } else {
        alertify.alert("Caracteres no permitidos","El texto contiene caracteres no permitidos (Mayusculas y/o Caracteres especiales)");
    }

}

function decrypt(){
    let textoDesencriptado = document.getElementById("textoPlano").value;

    if (validarRestriccion(textoDesencriptado)) {
        
        for (let i = 0; i < keys.length; i++) {
            if (textoDesencriptado.includes(keys[i][1])) {
                textoDesencriptado = textoDesencriptado.replaceAll(keys[i][1], keys [i][0]);
            }
        }
        
        mostrarDecrypt(textoDesencriptado);
    } else {
        alertify.alert("Caracteres no permitidos","El texto contiene caracteres no permitidos (Mayusculas y/o Caracteres especiales)");
    }

}

function validarRestriccion(textoPlano){
    for (let i = 0; i < textoPlano.length; i++) {
        caracter = textoPlano[i];
        if (caracter.charCodeAt(0) < 97 || caracter.charCodeAt(0) > 122){
            if (caracter.charCodeAt(0) != 32) {
                return false;
            }
        }
    }
    return true;
}

function mostrarEncrypt(textoEncriptado) {
    document.getElementsByClassName("img-no-result")[0].style.display = "none";
    document.getElementsByClassName("on-result")[0].style.display = "flex";
    document.getElementById("lblResultado").innerText = textoEncriptado;
}

function mostrarDecrypt(textoDesencriptado) {
    document.getElementsByClassName("img-no-result")[0].style.display = "none";
    document.getElementsByClassName("on-result")[0].style.display = "flex";
    document.getElementById("lblResultado").innerText = textoDesencriptado;
}

document.getElementById("btn-copy").addEventListener("click", function () {
    let mensaje = document.getElementById("lblResultado").innerText;
    navigator.clipboard.writeText(mensaje);
    document.getElementById("lblResultado").innerText = "";
    document.getElementById("textoPlano").value = "";
    document.getElementsByClassName("img-no-result")[0].style.display = "block";
    document.getElementsByClassName("on-result")[0].style.display = "none";
    alertify.success('Mensaje copiado.');
});