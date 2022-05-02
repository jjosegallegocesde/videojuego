import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

//RUTINA PARA RECIBIR EMAIL Y APSSWORD DEL FORMULARIO
//ACTIVANDO LA RUTINA DE REGISTRO

let botonRegistro=document.getElementById("botonregistro")
let alerta=document.getElementById("alerta")
let formulario=document.getElementById("formularioregistro")

botonRegistro.addEventListener("click",function(event){
    event.preventDefault()

    //CAPTURAR EL VALOR ESCRITO EN LA CAJA CORREO
    let email=document.getElementById("email").value

    //CAPTURAR EL VALOR ESCRITO EN LA CONTRASEÑA
    let password=document.getElementById("password").value

    //ACTIVAR LA RUTINA DE FIREBASE PARA EL REGISTRO
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        //activar un modal de confirmacion del registro
        alerta.textContent="Exito en el registro"
        alerta.classList.add("alert-primary")
        alerta.classList.remove("alert-danger","invisible")
        setTimeout(function(){
            alerta.classList.add("invisible")
            formulario.reset()
        },2000)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        //activar un modal que meustre por que fallo el registro
        alerta.textContent="Fallamos en el registro: "+errorMessage
        alerta.classList.add("alert-danger")
        alerta.classList.remove("alert-primary","invisible")
        setTimeout(function(){
            alerta.classList.add("invisible")
        },2000)
    });


})