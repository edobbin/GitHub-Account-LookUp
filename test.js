const url = 'https://api.github.com/users/edobbin/repos';

async function getRepos() {
    const response = await fetch(url);
    const data = await response.json();
    
    for (let i = 0; i < data.length; i++) {
        console.log(`Repo ${(i + 1)}: ${data[i].name}`);
    }

    // Returning the first repository's name for demonstration purposes
    return {
        name: data.length > 0 ? data[0].name : 'No Repos Found'
    };
}

getRepos().then(result => console.log(result));