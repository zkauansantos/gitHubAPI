import {getUser} from '/src/scripts/services/user.js'
import {getRepos} from '/src/scripts/services/repository.js'
import {getEvents} from '/src/scripts/services/events.js'
import {user} from '/src/scripts/objects/user.js'
import {screen} from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value 
     if (validateEmptyInput(userName)) return
    getUserData(userName)
    console.log(getEvents(userName))
})

// Event button "Enter"
document.getElementById('input-search').addEventListener('keyup', (e)=> {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0 ){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {
   const userReponse = await getUser(userName)
   const repositoriesResponse = await getRepos(userName)
   const eventsResponse = await getEvents(userName)

    if(userReponse.message === 'Not Found'){
        alert('Este usuário não existe')
        return
    }

   user.setInfo(userReponse)
   user.setRepositories(repositoriesResponse)
   user.setEvents(eventsResponse)
   console.log(eventsResponse)
   screen.renderUser(user)
}




