
// async function getGHAccount(ghID){
//     const url = `https://api.github.com/users/${ghID}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.name;

// }

async function getGHAccount(username){
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        user: data.login,
        name: data.name,
        id: data.id,
        pic: data.avatar_url
    };

}

getGHAccount("edobbin").then(info => console.log(info.pic));

var pfp = document.getElementById("Profile-Picture");
var textBox = document.getElementById("username");
var button = document.getElementById("sub");
var usernam = document.getElementById("user");

button.addEventListener('click', () =>{
    const inputname = textBox.value;
    getGHAccount(inputname).then(
        info => {pfp.src =info.pic; usernam.innerHTML = info.name}
    )

    

    
    //console.log("click");
});


