// async function getGHAccount(ghID){
//     const url = `https://api.github.com/users/${ghID}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.name;

// }
var card = document.getElementById("pfc");
var pfp = document.getElementById("Profile-Picture");
var textBox = document.getElementById("inpt");
var button = document.getElementById("butt");
var usernam = document.getElementById("user");
var ghAt = document.getElementById("gh");

var follow = document.getElementById("followers");
var following = document.getElementById("following");
var repo = document.getElementById("repo");
var repo_list = document.getElementById("repositories");

async function getGHAccount(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  if (!response.ok) {
    window.alert("Error");
    card.style.visibility = "hidden";
    return;
  } else {
    const data = await response.json();

    return {
      user: data.login,
      name: data.name,
      id: data.id,
      pic: data.avatar_url,
      follow: data.followers,
      following: data.following,
      repo: data.public_repos,
      url: data.html_url,
      repo_url: data.repos_url,
    };
  }
}

async function getRepos(username) {
  var repoURl = `https://api.github.com/users/${username}/repos?sort=updated`;
  const response = await fetch(repoURl);
  if (!response.ok) {
    console.log("fail");
    return;
  } else {
    const data = await response.json();
    
    if (data.length == 0) {
      return;
    } else {
      for (let i = 0; i < data.length; i++) {
        console.log(`Repo ${i + 1}: ${data[i].name} `);
        console.log(data[i].description);
      }
      return {
        name: data.name,
        desc: data.description,
        rurl: data.html_url,
        topLang: data.language

      };
    }
  }
}

//getGHAccount("edobbin").then(info => console.log(info.pic));

button.addEventListener("click", () => {
  const inputname = textBox.value;
  getGHAccount(inputname).then((info) => {
    pfp.src = info.pic;
    usernam.innerHTML = info.name;
    ghAt.innerHTML = `<a href= "${info.url}"> @${info.user}</a>`;
    follow.innerHTML = `Followers: ${info.follow}`;
    following.innerHTML = `Following: ${info.following}`;
    repo.innerHTML = `Repo: ${info.repo}`;
    repoURl = info.repo_url;
  });
  getRepos(inputname).then((res) => console.log(res[0]));
  card.style.visibility = "visible";
  console.log("click");
});
