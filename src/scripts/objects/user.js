const user = {
    avatarUrl: '' ,
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    events: [],
    forks:'',
    watchers: '',
    star: '',
    language: '',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url 
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories= repositories
        this.forks = repositories.forks
        this.watchers = repositories.watchers
        this.star = repositories.stargazers_count
        this.language = repositories.language
    },
    setEvents(events){
        this.events = events
    }
}

export {user}