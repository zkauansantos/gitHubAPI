import {getUser} from '/src/scripts/services/user.js'
import {getRepos} from '/src/scripts/services/repository.js'
import {user} from '/src/scripts/objects/user.js'
import {screen} from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value 

    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e)=> {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserData(userName)
    }
})

async function getUserData(userName) {
   const userReponse = await getUser(userName)
   const repositoriesResponse = await getRepos(userName)
  
   user.setInfo(userReponse)
   user.setRepositories(repositoriesResponse)
   screen.renderUser(user)
   
}


