const textArea = document.querySelector(".text");
const secret = document.querySelector(".result-message");
const imgElement = document.querySelector(".encriptado img");
const message = document.querySelector(".message-encriptado");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Encriptar
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}
    
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    secret.value = textoEncriptado
    textArea.value = "";
    document.getElementById("sobre").style.display ='none'; //hacer desaparecer imagen
    document.getElementById("message-encriptado").style.display ='none'; //hacer desaparecer h2
}

//Desencriptar
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
         stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}
    
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    secret.value = textoEncriptado
    textArea.value = "";
}

//Copiar
function copiarResultado() {
  const secret = document.getElementById("result-message");

  if (secret) {
    const textToCopy = secret.value || secret.innerText;

    // Create a temporary textarea element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  }
}
//Screen size for img and h2
function checkScreenWidth() {

    if (window.innerWidth <=1200) {
        imgElement.style.display = "none";
        message.style.display = "none";
  
      } else {
        imgElement.style.display = "block";
        message.style.display = "block";
      }
}

// correr al abrir la pagina
checkScreenWidth();

// correr en differnetes dispositivos
window.addEventListener('resize', checkScreenWidth);
  

//Reiniciar juego
function reiniciar() {

    textArea.value = ""; 
    secret.value = ""; 

    if (window.innerWidth <=1200) {
        imgElement.style.display = "none";
        message.style.display = "none";
  
      } else {
        imgElement.style.display = "block";
        message.style.display = "block";
      }
}
  
