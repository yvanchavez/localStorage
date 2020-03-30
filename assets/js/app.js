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

    //Crear elemento y agregar el contenido a la lista
    const li = document.createElement('li')
    li.innerText = tweet
    listaTweets.appendChild(li)
}