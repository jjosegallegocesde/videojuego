//VERIFICAR SI EL USUARIO ESTA REGISTRADO O HIZO LOGIN
import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"



//referencia al nombre de usuario o avatar
//referencia al boton de salir

let avatar=document.getElementById("avatar")
let botonSalir=document.getElementById("botonsalir")
let botonlogin=document.getElementById("btnlogin")



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    avatar.textContent=user.email
    avatar.classList.add("invisible")
    botonlogin.classList.add("invisible")


    //RUTINA DE SALIR
    botonSalir.addEventListener("click",function(evento){

        signOut(auth).then(() => {
            // Sign-out successful.
            avatar.classList.add("invisible")
            botonlogin.classList.remove("invisible")
            window.location.href="index.html"

        }).catch((error) => {
            // An error happened.
        });

    })


    // ...
  } else {
    // User is signed out
    // ...
  }
});