document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value 

    getUserProfile(userName)
})

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

async function repos(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos`)
    return await response.json()
}

document.getElementById('input-search').addEventListener('keyup', (e)=> {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
})

function getUserProfile(userName) {
    user(userName).then(userData =>{
        console.log(userData)
    //avatar url
    //bio
    //name
    let userInfo = `<div class= "info">
                        <img src="${userData.avatar_url}" alt="Foto do perfil" />
                        <div class="data">
                            <h1>${userData.name ?? 'Não possui nome cadastrado 😭'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😭'}</p>
                        </div>
                    </div>`
                
    document.querySelector('.profile-data').innerHTML = userInfo
    getUserRepositories(userName)
    })    
}

function getUserRepositories(userName) {
    repos(userName).then(reposData => {
        let reposItens = ""
        reposData.forEach(repo => {
            reposItens += `<li><a href="${repo.html_url}" target= "_blank">${repo.name}</a></li>`
        
        })

        document.querySelector('.profile-data').innerHTML += `<div class= "repositories section">
                                                                    <h2>Repositórios</h2>
                                                                    <ul>${reposItens}</ul>
                                                              </div>`
    })
}

