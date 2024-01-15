const button = document.querySelector(".btn");

const jokeDiv = document.getElementById("joke"); 


button.addEventListener("click", getJoke);

getJoke();

/* using async & await to access promise */
async function getJoke(){
    const fetchHeader = {
        headers: {
            "Accept": "application/json"
        }
    }
    
    const res = await fetch("https://icanhazdadjoke.com/", fetchHeader);

    const resObj = await res.json();
    
    jokeDiv.innerHTML = resObj.joke;
}

/* using .then() t0 access promsie */

/* function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    .then((res) => { 
        return res.json();
    })
    .then((randomJoke) => {
        jokeDiv.innerHTML = randomJoke.joke;
    })
} */