// main.js

document.addEventListener('DOMContentLoaded', function () {

    let availableAnime = GetAvailableAnime();
    localStorage.setItem('animes', JSON.stringify(availableAnime));
});

function GetAvailableAnime(){

    let AvailableImage = [
        { name: "Jujutsu", route: "./assets/img/jujutsu.jpe",description: "Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição."},
        { name: "Konosuba", route: "./assets/img/konosuba.jpe",  description: "Após um acidente de trânsito, a breve e desapontadora vida de Kazuma Sato deveria ter acabado, mas ele acorda e vê uma belíssima garota diante dele. Ela diz ser Aqua, uma deusa, e lhe pergunta se ele gostaria de ir para outro mundo, levando consigo apenas uma coisa deste mundo. Kazuma decide levar a própria deusa consigo, e eles são transportados para um mundo de fantasia cheio de aventura, dominado por um rei-demônio. Agora Kazuma quer apenas viver em paz, mas Aqua quer resolver vários dos problemas deste novo mundo, e o rei-demônio não vai ignorá-los por muito tempo..."},
        { name: "One piece", route: "./assets/img/onepiece.jpe",  description: "Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. 'Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!'. Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!"  },
        {name: "A Certain Magical Index", route: "./assets/img/indexAnime.jpe", description: "Kamijo é um estudante bastante dedicado da Academy City, onde usa-se ciência para desenvolver habilidades sobrenaturais. E isso é uma boa notícia para Index, uma jovem freira fugindo de uma sociedade de feiticeiros que deseja obter os incríveis 103 mil volumes de conhecimento mágico armazenados em sua memória. Quando os caminhos de Index e Kamijo se cruzam, ela ganha um amigo fiel e protetor, e embora Kamijo seja facilmente o garoto mais fraco da Academy City, ele também tem um outro poder: o Imagine Breaker, um poder inexplicável em sua mão direita que lhe permite negar os poderes dos outros."},
        { name: "Chainsaw Man", route: "./assets/img/semSalMen.jpe", description: "Denji é um adolescente que mora com Pochita, o Demônio da Motosserra. Por conta das dívidas que herdou de seu pai, ele vive na miséria, exterminando outros demônios com Pochita para pagar as contas. Até que, um dia, Denji é traído e morre. Em seus últimos momentos de consciência, ele firma um contrato com Pochita e renasce como o Homem-Motosserra - um humano com coração de demônio." }
    ]

    return AvailableImage;
}

function createRainbowGradient(element) {
    let colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // Cores do arco-íris

    let gradient = colors.map((color, index) => {
        let position = (index / (colors.length - 1)) * 100;
        return `${color} ${position}%`;
    }).join(', ');

    element.style.background = `linear-gradient(to right, ${gradient})`;
}