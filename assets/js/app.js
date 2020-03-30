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

    //agrega el tweet al local storage
    agregarTweetLocalStorage(tweet)
}

//Elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove()
    }
}

function agregarTweetLocalStorage(tweet){
    let tweets
    tweets = obtenerTweetsLocalStorage()

    //agregar el nuevo tweet
    tweets.push(tweet)
    //convertir de string a arreglo para el local storage
    localStorage.setItem('tweets',JSON.stringify(tweets))

}

function obtenerTweetsLocalStorage(){
    let tweets

    if(localStorage.getItem('tweets')===null){
        tweets = []


    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }

    return tweets
}