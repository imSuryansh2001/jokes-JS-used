// by using async await  = this will reduce complexity of code as compare to promises
//  and helps to make it more simple and redable.

const jokes = document.querySelector("#joke");
const jokeButton = document.querySelector("#jokeButton");


const generateJokes = async () => {

    try {

        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const res = await fetch("https://icanhazdadjoke.com", setHeader) // getting data
        const data = await res.json(); // converting data in json if gets
        jokes.innerHTML = data.joke; // data into inner html to show

    } catch (err) {
        console.log(`error is ${err}`); // if not then show error
    }
}


jokeButton.addEventListener("click", generateJokes);

generateJokes();