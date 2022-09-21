const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class= "info">
                                    <img src="${user.avatarUrl}" alt="Foto do perfil" />
                                    <div class="data">
                                        <h1>${user.name ?? "Não possui nome cadastrado 😭"}</h1>
                                        <p>${user.bio ?? "Não possui bio cadastrada 😭"}</p>
                                        <div class="networking">
                                            <strong> Seguindo: <span class="follow">${ user.following}</span></strong>
                                            <strong> Seguidores: <span class="follow">${user.followers}</span></strong>
                                        </div>    
                                    </div>
                                </div>`;

    let repositoriesItensAndInteractions = "";
    user.repositories.forEach((repo) => repositoriesItensAndInteractions += `<li><a href= "${repo.html_url}" target="_blank">${repo.name}
                                                                                    <p> <i class="fa-solid fa-star">🍴${repo.forks}</i>
                                                                                         <i class="fa-solid fa-star">📚${repo.language}</i>
                                                                                         <i class="fa-solid fa-star">⭐${repo.stargazers_count}</i>
                                                                                         <i class="fa-solid fa-star">👀${repo.watchers}</i>
                                                                                    </p>
                                                                                  </a>
                                                                              </li>`
    );

    if (user.repositories.length > 0)
      this.userProfile.innerHTML += `<div class="repositories section">
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItensAndInteractions}</ul>
                                     </div>`;

    let eventsRecents = "";
    user.events.forEach((event) => {
      if (event.type == "PushEvent" || event.type == "CreateEvent") {
        if (event.payload.commits) {
          eventsRecents += `<li><strong>${event.repo.name}</strong>
                                <span>${event.payload.commits[0].message}</span>
                            </li>`;
        }
      }
    });

    if (user.events.length > 0)
      this.userProfile.innerHTML += `<div class="events">
                                        <h2> Eventos </h2>
                                        <ul>${eventsRecents}</ul>  
                                     </div>`;
  },
};

export { screen };
