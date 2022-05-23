//CONSUMIENDO EL API DE SPOTIFY

//1. CREAR UNA VARIABLE PARA ALMACENAR LA URI DEL SERVICIO
const URI='https://api.spotify.com/v1/albums/1tGG9ggFTIX8LZt8lH9hqF/tracks?market=US&limit=10&offset=5'

//2. CONFIGURO LA PETICION
const TOKEN='Bearer BQBX4EOmbwvtyg_GjrXj_hT1PHVqJtnc_jYHwmQi6JQV6_EFQAc6DrzqJuPWWSsOKxmK65jxffGTeC_DRMVWTAUBATnKLv_eUq0GFBt3zxAjs7PFmMDWW4UB2OzFD1aVTOeBxWxNLTtIeke_BAw'

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}

//3. Intento consumir el API (PROMESA)
fetch(URI,PETICION)
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta.items) //RESPUESTA DE SPOTIFY SERVER
    //recorreindo el arreglo
    
    let fila=document.getElementById("fila")
    respuesta.items.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.preview_url)

        //TRAVERSING
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre=document.createElement("p")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src="https://firebasestorage.googleapis.com/v0/b/juegolunes.appspot.com/o/fotobso.jpg?alt=media&token=a6c1098b-be8c-40cc-86f3-c1c13f720601"

        //PADRES E HIJOS (reactDOM)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)



        
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})