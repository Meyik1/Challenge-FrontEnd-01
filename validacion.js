const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const enviarBtn = document.getElementById("enviar");
const descargarBtn = document.getElementById("descargar");

descargarBtn.addEventListener("click", () => {
    const pdf = new jsPDF();
    const contenido = document.documentElement;
    pdf.fromHTML(contenido, 15, 15);
    pdf.save("Portafolio_Manuel_Mora.pdf");
});

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length >50){
    alert("Ingrese un nombre más corto.")
    }

    if(!regexEmail.test(email.value)){
        alert("Ingrese un email valido.")
    }

    if(asunto.value.length >50){
        alert("Ingrese un asunto más corto.")
        }

    if(mensaje.value.length >300){
        alert("Ingrese un mensaje más corto.")
        }
    
    if (
        nombre.value.length > 0 &&
        regexEmail.test(email.value) &&
        asunto.value.length > 0 &&
        mensaje.value.length > 0
        ) {
            enviarBtn.disabled = false; // Habilitar 
          } else {
            enviarBtn.disabled = true; // Deshabilitar 
          }   
})



