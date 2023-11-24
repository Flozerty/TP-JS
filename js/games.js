const jeux = [
  {
    nom: "Minecraft",
    resume: "Minecraft est plus qu'un jeu - c'est une expérience, un terrain de jeu pour l'imagination et un espace où les possibilités sont littéralement infinies. Que vous cherchiez une aventure palpitante, un espace créatif relaxant, ou une arène sociale dynamique, Minecraft a quelque chose pour tout le monde.",
    prix: "20.00€",
    images: [
      "src/jeux/m1.jpg",
      "src/jeux/m2.jpg",
      "src/jeux/m3.jpg",
      "src/jeux/m4.jpg"
    ]
  },
  {
    nom: "League of Legends",
    resume: "Entrez dans la Faille de l'invocateur et plongez dans un univers où chaque décision, chaque mouvement et chaque compétence est cruciale. League of Legends n'est pas simplement un jeu; c'est une arène ardente de stratégie et de combat, un monde où les victoires sont sculptées à partir de la sagesse tactique et du travail d'équipe habile.",
    prix: "25.00€",
    images: [
      "src/jeux/lol1.jpg", 
      "src/jeux/lol2.jpg", 
      "src/jeux/lol3.jpg", 
      "src/jeux/lol4.jpg"
    ]
  },
  {
    nom: "Valorant",
    resume: "Pénétrez dans un univers où précision, stratégie et synchronisation sont les clés de la réussite. Valorant n'est pas simplement un jeu; c'est un théâtre de guerre qui combine habilement tir de précision et pouvoirs surnaturels, forgeant une arène où votre adresse au tir et vos stratégies tactiques sont tout aussi essentielles.",
    prix: "30.00€",
    images: [
      "src/jeux/v1.jpg", 
      "src/jeux/v2.jpg",
      "src/jeux/v3.jpg",
      "src/jeux/v4.jpg"
    ]
  },
  {
    nom: "Rocket League",
    resume: "Rocket League transcende l'expérience traditionnelle du jeu vidéo, offrant une symbiose époustouflante entre sport et mécanique, dans un spectacle visuel où chaque but est une œuvre d'art acrobatique. Que vous aspiriez à être le meilleur buteur, le gardien insaisissable ou l'as du volant aérien, Rocket League a une place pour tous.",
    prix: "15.00€",
    images: [
      "src/jeux/rl1.jpg", 
      "src/jeux/rl2.jpg",
      "src/jeux/rl3.jpg",
      "src/jeux/rl4.jpg"
    ]
  }
];

let currentImageIndex = 0;
let currentGameIndex = 0;
let carrouselInterval;

/**
 * 
 * @param {number} index l'index du jeu dans le tableau d'objet
 */
function changeGame(index) {
  const jeu = jeux[index];

  document.getElementById("games-name").textContent = jeu.nom;
  document.getElementById("games-summary").textContent = jeu.resume;
  document.getElementById("games-price").textContent = `Prix: ${jeu.prix}`;

  // Update carrousel
  updateCarrousel(jeu.images);
}

/**
 * 
 * @param {String[]} images Le tableau de path vers les images du jeu
 */
function updateCarrousel(images) {
  const carrousel = document.getElementById("carrousel");
  carrousel.innerHTML = '';

  images.forEach((imgPath, index) => {
    const img = document.createElement("img");
    img.src = imgPath;
    img.alt = "Image issu de " + jeux[index].nom;
    img.style.display = index === currentImageIndex ? 'block' : 'none';
    img.className = 'games-image';
    carrousel.appendChild(img);
  });

  // Nettoyage de l'intervalle précédent pour éviter l'accumulation
  if (carrouselInterval) {
    clearInterval(carrouselInterval);
  }

  // Changement d'image toutes les 3.5 sec
  carrouselInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images.forEach((imgPath, index) => {
      carrousel.children[index].style.display = index === currentImageIndex ? 'block' : 'none';
    });
  }, 3500);
}

// Initialisation
changeGame(0);



