
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

var follow = document.getElementById("followers");
var following = document.getElementById("following");
var repo = document.getElementById("repo")

async function getGHAccount(username){
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    if(!response.ok ){
        window.alert("Error");
        card.style.visibility = 'hidden';
        return;
    }else{
    const data = await response.json();
    

      return {
        user: data.login,
        name: data.name,
        id: data.id,
        pic: data.avatar_url,
        follow: data.followers,
        following: data.following,
        repo: data.public_repos
    };  
    
}

}

//getGHAccount("edobbin").then(info => console.log(info.pic));



button.addEventListener('click', () =>{
    const inputname = textBox.value;
    getGHAccount(inputname).then(
        info => {pfp.src =info.pic; usernam.innerHTML = info.name; follow.innerHTML = `Followers: ${info.follow}`; following.innerHTML = `Following: ${info.following}`; repo.innerHTML = `Repo: ${info.repo}`}
    )

    

    card.style.visibility = 'visible';
    console.log("click");
});


