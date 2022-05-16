//CONSUMIENDO EL API DE SPOTIFY

//1. CREAR UNA VARIABLE PARA ALMACENAR LA URI DEL SERVICIO
const URI='https://api.spotify.com/v1/albums/1tGG9ggFTIX8LZt8lH9hqF/tracks?market=US&limit=10&offset=5'

//2. CONFIGURO LA PETICION
const TOKEN='Bearer BQCmMeIucMhjeOYRFrqbjbnzhrL9NUrFjkrVeY2gWSCrqf2wr8UBXUTuXgHDRfDBwXxCkSpxLdYJv7eFYjQLiFg7k1qpLetyRvCEG4sWWHFNq5S0WwIOx2D3TwcoNDC9ZgshO6h4VsDpVVGrg6o'

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
    respuesta.items.forEach(function(cancion){
        console.log(cancion.preview_url)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})