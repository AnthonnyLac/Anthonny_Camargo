document.addEventListener('DOMContentLoaded', function () {
    let animeList = JSON.parse(localStorage.getItem('animes'));
    let animeCards = document.getElementsByClassName("anime");

    Array.from(animeCards).forEach((animeCard, i) => {
        if (i < animeList.length) {
            populateAnimeCards(animeCard, animeList[i]);
        } else {
            populateAnimeCardsGenericImage(animeCard);
        }
    });
    
});

function populateAnimeCards(animeCard, animeData) {
    let title = document.createElement("h2");
    title.innerText = animeData.name;
    animeCard.insertBefore(title, animeCard.getElementsByClassName("anime-content")[0]);

    let description = document.createElement("p");
    description.innerText = animeData.description;

    let image = document.createElement("img");
    image.src = animeData.route;
    image.className = "anime-image";

    let animeBody = animeCard.getElementsByClassName("anime-content");
    animeBody[0].appendChild(image);
    animeBody[0].appendChild(description);
}

function populateAnimeCardsGenericImage(animeCard) {
    let title = document.createElement("h2");
       title.innerText = "404 - Anime Não Encontrada";
    animeCard.insertBefore(title, animeCard.getElementsByClassName("anime-content")[0]);

    let description = document.createElement("p");
    description.innerText = "Não tem nada aqui!";

    let image = document.createElement("img");
    image.src = "./assets/img/yuzu-bucket.png"; 
    image.className = "anime-image";

    let animeBody = animeCard.getElementsByClassName("anime-content");
    animeBody[0].appendChild(image);
    animeBody[0].appendChild(description);

    createErrorGradient(animeCard);
}


function createErrorGradient(card) {
    let colors = ['#8A2BE2', '#A020F0', '#9932CC', '#9400D3']; 

    let gradient = colors.map((color, index) => {
        let position = (index / (colors.length - 1)) * 100;
        return `${color} ${position}%`;
    }).join(', ');

    card.style.background = `linear-gradient(to right, ${gradient})`;
    card.style.color = 'white';
    card.style.textAlign = 'center';
}