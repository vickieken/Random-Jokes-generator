const jokeBtn = document.querySelector('.btn');

const audioBtn = document.querySelector('.fa-volume-up');

const jokesContainer = document.querySelector('.jokesContainer');

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single';

let getJoke = () => {
    jokesContainer.classList.remove('show')
    fetch(url)
    .then((resp) => {
        if (!resp.ok) throw new error('the url is inalid');
        return resp.json();
    })
    .then((data) => {
        // console.log(data.joke);
        jokes = `${ (data.joke) }`;
        jokesContainer.classList.add('show');
        jokesContainer.textContent = jokes;
    })
    .catch((err) => {
        console.log(err.message);
    });
}

jokeBtn.addEventListener('click', ()=> {
    getJoke();
})

audioBtn.addEventListener('click', ()=> {
    const speech = new SpeechSynthesisUtterance(jokes);

    setTimeout(() => {
        window.speechSynthesis.speak(speech);
    }, 1000) 
})