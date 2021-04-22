class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
  //display profile in ui
  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Memeber Since: ${user.created_at}</li>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }
  //Show Repo

  showRepos(repos){

    let output = '';

    repos.forEach(function(repo){
      output+= `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target"_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>`
    });

    document.getElementById('repos').innerHTML = output;

  }
  //clear profile
  clearProfile(){
    this.profile.innerHTML = '';
  }
  //Show alert message
  showAlert(message, className){
    //Clear any remaining alert messages
    this.clearAlert();
    //create Div
    const div = document.createElement('div');
    //Add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get Parent
    const conatiner = document.querySelector('.searchContainer');
    //get Search box
    const search = document.querySelector('.search');
    //insert alert
    conatiner.insertBefore(div, search);

    //Timeout after 3 seconds
    setTimeout(()=> this.clearAlert(), 3000);
  }

    //clear alert message
    clearAlert(){
      const currentAlert = document.querySelector('.alert');
      if(currentAlert){
        currentAlert.remove();
      }
    }
}