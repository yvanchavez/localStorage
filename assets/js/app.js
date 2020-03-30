//variables
const listaTweets = document.getElementById('lista-tweets')

//Event Listeners
eventListeners()

function eventListeners(){
    //Cuando se envia al formulario
    document.querySelector('#formulario').addEventListener('submit',
    agregarTweet)

    //Borrar tweets
    listaTweets.addEventListener('click' , borrarTweet)
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
    li.innerText = tweet
    //agrega el boton borrar al tweet
    li.appendChild(botonBorrar)
    //agrega el li a la lista
    
    listaTweets.appendChild(li)
}

function borrarTweet(e){
    e.preventDefault
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove()
    }
}