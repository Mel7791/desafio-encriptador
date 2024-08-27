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
    document.getElementById("sobre").style.display ='none'; //desaparece img
    document.getElementById("message-encriptado").style.display ='none'; //desaparece h2
}

//Desencriptar
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
         stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); //inverso
        }
    }
    return stringDesencriptado
}
    
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    secret.value = textoEncriptado
    textArea.value = ""; //limpia valor usuario
}

//Copiar
function copiarResultado() {
  const secret = document.getElementById("result-message");

  if (secret) {
    const textToCopy = secret.value || secret.innerText;

    const tempTextArea = document.createElement("textarea"); 
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea); // Crea textarea temporal

    tempTextArea.select(); // Selecciona el texto q esta dentro de textarea
    tempTextArea.setSelectionRange(0, 99999); // Para celulares

    document.execCommand("copy");  // Copia texto

    document.body.removeChild(tempTextArea); // Limpia textarea temporal
  }
}

// Ajusta el tamano de img y h2
function checkScreenWidth() {

    if (window.innerWidth <=1200) {
        imgElement.style.display = "none";
        message.style.display = "none";
  
      } else {
        imgElement.style.display = "block";
        message.style.display = "block";
      }
}

// Corre al abrir la pagina
checkScreenWidth();

// Corre en differnetes dispositivos
window.addEventListener('resize', checkScreenWidth);
  
//Reiniciar 
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
  
