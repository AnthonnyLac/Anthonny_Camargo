document.addEventListener('DOMContentLoaded', function () {

    let storedAnime = JSON.parse(localStorage.getItem('animes'));

    let animeCard = document.getElementById("animeCard");
    let title = document.createElement("h3");
    let image = document.createElement("img");


    let randomNumber = Math.floor(Math.random() * storedAnime.length);

    title.innerText = storedAnime[randomNumber].name;
    image.src = storedAnime[randomNumber].route;

    animeCard.appendChild(title);
    animeCard.appendChild(image);
});