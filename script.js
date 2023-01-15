const inputMensaje = document.querySelector('#mensaje');
const inputResultado = document.querySelector('#resultado');

const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const btnCopy = document.querySelector('#copy');

const form1 = document.querySelector('.input');

function validateMessage() {

    //Borrar errores previos
    let erroresPrevios = document.querySelectorAll('.error');
    for (let err of erroresPrevios) {
        form1.removeChild(err);
    }
    var message = inputMensaje.value

    let letrasValidas = " abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of message){
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement('p');
            p.setAttribute('class', 'error');
            p.textContent = `La letra ${letra} no es válida`
            mensajeError.appendChild(p);
        }
    }


    if (mensajeError.children.length === 0) {
        return true;
    } else
    form1.appendChild(mensajeError);
}


inputMensaje.focus();

function encrypt () {

    if(validateMessage()) {
        var message = inputMensaje.value;
        var messageEncrypt = message
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

        inputResultado.value = messageEncrypt;
    } else {
        inputResultado.value = "";
        return false;
    }

    
}

function decrypt () {

    if(!validateMessage()) return;

    var messageEncrypt = inputMensaje.value;
    var message = messageEncrypt
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    inputResultado.value = message;
}

function copy () {
    messageEncrypt = inputResultado.value;
    navigator.clipboard.writeText(messageEncrypt);
    inputMensaje.value = "";
    inputMensaje.focus();
}


btnEncrypt.onclick = encrypt;

btnDecrypt.onclick = decrypt;

btnCopy.onclick = copy;
