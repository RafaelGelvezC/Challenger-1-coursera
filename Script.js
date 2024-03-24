var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".mu-bu");
var contenedor = document.querySelector(".contenedor-Parrafo");
var resultado = document.querySelector(".contenedor-Resultados");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarInfo();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarInfo();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value;
}

function ocultarInfo(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje.toLowerCase(); // convierte el mensaje recibido a minúsculas
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje.toLowerCase();
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto.substring(i, i+4) == "ai"){  //Se evalúa si el substring (parte de la cadena) desde la posición i coincide con alguna de las cadenas encriptadas ("ai", "enter", "imes", "ober", "ufat").
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto.substring(i, i+5) == "enter"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto.substring(i, i+4) == "imes"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto.substring(i, i+4) == "ober"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto.substring(i, i+4) == "ufat"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


const btnCopiar = document.querySelector(".btn-Copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".contenedor-Resultados").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Copiado texto"); 
});