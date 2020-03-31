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

    //Contenido cargado
    document.addEventListener('DOMContentLoaded',localStorageListo)
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
        borrarTweetLocalStorage(e.target.parentElement.innerText)
     
    }
}

function localStorageListo(){
    let tweets

    tweets = obtenerTweetsLocalStorage()

    tweets.forEach(function(tweet){
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
    });
}

function agregarTweetLocalStorage(tweet){
    let tweets
    tweets = obtenerTweetsLocalStorage()

    //agregar el nuevo tweet
    tweets.push(tweet)
    //convertir de string a arreglo para el local storage
    localStorage.setItem('tweets',JSON.stringify(tweets))

}

//comprobar que haya elementos en el local storage, retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets

    if(localStorage.getItem('tweets')===null){
        tweets = []


    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }

    return tweets
}

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar

    tweetBorrar = tweet.substring(0,tweet.length -1)
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet,index){
        if(tweetBorrar === tweet){
            tweets.splice(index,1)
        }
        localStorage.setItem('tweets', JSON.stringify(tweets))
    })

    console.log(tweetBorrar)
}