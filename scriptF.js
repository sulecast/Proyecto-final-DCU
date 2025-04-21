//OBTENER LOS VALORES DE LOS INPUTS PARA VALIDARLOS
const archivo = document.getElementById("img")
const nombre = document.getElementById("name")
const numero = document.getElementById("number")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const boton = document.getElementById("button")
const titulo_form = document.getElementById("title-form")
const titulo_web = document.getElementById("title-web")
const acceso = document.getElementById("access")



const label1 = document.getElementById("label-1")
const label2 = document.getElementById("label-2")
const label3 = document.getElementById("label-3")
const label4 = document.getElementById("label-4")


// EVENTO PARA VALIDAR A TRAVES DEL SUBMIT
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    // CONDICIONALES PARA VALIDAR LOS DATOS
    if(nombre.value.length <6) {
        warnings += `El nombre no es muy corto <br>`
        entrar = true
    }

    if(numero.value.length != 10) {
        warnings += `El numero no es valido <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)) {
        warnings += 'El Email no es valido <br>'
        entrar = true
    }
    if (pass.value.length < 8) {
        warnings += `La contraseña es muy corta <br>`
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    } 
    
    // CONDICIONAL MOSTRAR LOS DATOS UNA VEZ VALIDADOS
    else {
        nombre.setAttribute('readonly','')
        numero.setAttribute('readonly','')
        email.setAttribute('readonly','')
        pass.setAttribute('readonly','')
        
        archivo.setAttribute('hidden','')
        label1.setAttribute('hidden','')
        label2.setAttribute('hidden','')
        label3.setAttribute('hidden','')
        label4.setAttribute('hidden','')

        boton.style.display = "none"

        titulo_form.innerHTML = ""
        titulo_form.innerHTML = `DATOS VALIDADOS CORRECTAMENTE`
        titulo_form.style.color = "#0f0"
        
        acceso.removeAttribute("hidden")
    }

})



// PARA PREVISUALIZAR LA IMAGEN
function previewImage(event, querySelector){
	const input = event.target;
	$imgPreview = document.querySelector(querySelector);
	if(!input.files.length) return
	file = input.files[0];
	objectURL = URL.createObjectURL(file);
	$imgPreview.src = objectURL;
                
}



