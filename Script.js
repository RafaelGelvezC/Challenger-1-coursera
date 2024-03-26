var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonLimpiar = document.querySelector(".btn-limpiar");
var munieco = document.querySelector(".mu-bu");
var contenedor = document.querySelector(".contenedor-Parrafo");
var resultado = document.querySelector(".contenedor-Resultados");
var cajaTexto = document.querySelector(".caja-texto");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonLimpiar.onclick = limpiar;

function encriptar() {
    ocultarInfo();
    var cajatexto = recuperarTexto();
    
    if (contieneCaracteresEspeciales(cajatexto) || contieneMayusculas(cajatexto) || contieneNumeros(cajatexto)) {
        mostrarAlerta();
    } else {
        var textoEncriptado = encriptarTexto(cajatexto);
        if (textoEncriptado) {
            mostrarResultado(textoEncriptado);
        } else {
            mostrarMunieco();
        }
    }
}

function desencriptar() {
    ocultarInfo();
    var cajatexto = recuperarTexto();
    
    if (contieneCaracteresEspeciales(cajatexto) || contieneMayusculas(cajatexto) || contieneNumeros(cajatexto)) {
        mostrarAlerta();
    } else {
        var textoDesencriptado = desencriptarTexto(cajatexto);
        if (textoDesencriptado) {
            mostrarResultado(textoDesencriptado);
        } else {
            mostrarMunieco();
        }
    }
}

function limpiar() {
    cajaTexto.value = "";
    resultado.textContent = "";
    mostrarMunieco();
    contenedor.classList.remove("ocultar");
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".caja-texto");
    return cajatexto.value;
}

function ocultarInfo() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    // Convertir la palabra a minúsculas
    mensaje = mensaje.toLowerCase();
    
    // Diccionario de encriptación
    var diccionario = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };
    
    // Encriptar cada letra utilizando el diccionario
    var textoEncriptado = mensaje.replace(/[eioua]/g, function(letra) {
        return diccionario[letra];
    });
    
    return textoEncriptado;
}

function desencriptarTexto(mensaje) {
    // Diccionario de desencriptación
    var diccionario = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    
    // Desencriptar utilizando el diccionario
    var textoDesencriptado = mensaje.replace(/enter|imes|ai|ober|ufat/g, function(bloque) {
        return diccionario[bloque];
    });
    
    return textoDesencriptado;
}

function contieneCaracteresEspeciales(texto) {
    var caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return caracteresEspeciales.test(texto);
}

function contieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
}

function contieneNumeros(texto) {
    return /[0-9]/.test(texto);
}

function mostrarAlerta() {
    window.alert("El texto ingresado no debe contener palabras en mayúsculas, caracteres especiales, acentos o números. Por favor, inténtelo de nuevo.");
}

function mostrarResultado(texto) {
    resultado.textContent = texto;
    resultado.classList.remove("ocultar");
}

function mostrarMunieco() {
    munieco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
}

const btnCopiar = document.querySelector(".btn-Copiar"); 
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".contenedor-Resultados").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Copiado texto"); 
});