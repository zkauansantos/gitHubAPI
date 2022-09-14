async function user(){
    const response = await fetch('https://api.github.com/users/devemdobro')
    return await response.json()
}

function getUserProfile() {
    user().then(userData =>{
        console.log(userData)
    //avatar url
    //bio
    //name

    let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perfil" />
                    <div class="data">
                        <h1>${userData.name ?? 'Não possui nome cadastrado 😭'}</h1>
                        <p>${userData.bio ?? 'Não possui bio cadastrada 😭'}</p>
                    </div>`

    const button = document.getElementById('btn-search')
    
    button.addEventListener('click', ()=> {
    const content = document.querySelector('.profile-data').innerHTML = userInfo
    })
    })


}

getUserProfile()
