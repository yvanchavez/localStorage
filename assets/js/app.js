//variables
const listaTweets = document.getElementById('lista-tweets')

//Event Listeners
eventListeners()

function eventListeners(){
    //Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet)
}

//funciones

//Agregar tweet al formulario
function agregarTweet(e){
    e.preventDefault()
    const tweet = document.getElementById('tweet').value

    //crear boton eliminar
    const botonBorrar = document.createElement('a')
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'

    //Crear elemento y agregar el contenido a la lista
    const li = document.createElement('li')
    //agrega el boton borrar al tweet
    li.appendChild(botonBorrar)
    //agrega el li a la lista
    li.innerText = tweet
    listaTweets.appendChild(li)
}