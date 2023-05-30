const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector('.btnCopiar');


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }
    return stringEncriptada;
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesecriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesecriptada = stringDesecriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesecriptada.includes(matrizCodigo[i][1])){
            stringDesecriptada = stringDesecriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])


        }

    }
    return stringDesecriptada
}

copiar.onclick = copy;

function copy() {
    navigator.clipboard.writeText(mensaje.value);
    textArea.value = '';
}