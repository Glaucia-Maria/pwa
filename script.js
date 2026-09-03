const planetas = [

    {
        nome: "Mercúrio",
        imagem: "img/mercurio.jpg",
        descricao:
            "O menor planeta do Sistema Solar e o mais próximo do Sol."
    },

    {
        nome: "Vênus",
        imagem: "img/venus.jpg",
        descricao:
            "Um planeta extremamente quente, coberto por uma atmosfera muito densa."
    },

    {
        nome: "Terra",
        imagem: "img/terra.jpg",
        descricao:
            "Nosso planeta, o terceiro a partir do Sol e o único conhecido a abrigar vida."
    },

    {
        nome: "Marte",
        imagem: "img/marte.jpg",
        descricao:
            "Conhecido como planeta vermelho por causa da presença de óxido de ferro em sua superfície."
    },

    {
        nome: "Júpiter",
        imagem: "img/jupiter.jpg",
        descricao:
            "O maior planeta do Sistema Solar e um gigante formado principalmente por gases."
    },

    {
        nome: "Saturno",
        imagem: "img/saturno.jpg",
        descricao:
            "Gigante gasoso famoso por seu impressionante sistema de anéis."
    },

    {
        nome: "Urano",
        imagem: "img/urano.jpg",
        descricao:
            "Um gigante de gelo que possui uma inclinação extremamente diferente dos demais planetas."
    },

    {
        nome: "Netuno",
        imagem: "img/netuno.jpg",
        descricao:
            "O planeta mais distante do Sol entre os oito planetas do Sistema Solar."
    }

];

// Elemento onde os cards serão colocados
const listaPlanetas = document.getElementById("lista-planetas");

// Cria os cards
planetas.forEach((planeta) => {
    const card = document.createElement("article");
    card.classList.add("card-planeta");

    card.innerHTML = `
        <img
            src="${planeta.imagem}"
            alt="Planeta ${planeta.nome}"
            loading="lazy"
        >
        <h3>${planeta.nome}</h3>
        <p>
            ${planeta.descricao}
        </p>

    `;

    listaPlanetas.appendChild(card);

});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => {
            console.log('Service Worker registrado!');
        })
        .catch((erro) => {
            console.error('Erro ao registrar Service Worker:', erro);
        });
}