// import de la fonction deleteWorks
import deleteWorks from "./delete_works.js";
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/works")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(works => {
        // Appel de la fonction genererWorks une fois que les données sont prêtes
        genererWorks(works);
        deleteWorks();
    })
// Fonction qui génère les works
function genererWorks(works) {
    for (let work of works) {
        // Création d'une balise figure 
        const figureElement = document.createElement("figure");
        // on dataset un id correspondant à l'id du works a la figure
        figureElement.dataset.id = work.id;
        // Création d'une span pour la poubelle
        const spanElement = document.createElement("span");
        // on ajoute une classe a la span 
        spanElement.classList.add("material-symbols-outlined");
        // on ajoute du hmtl à la span
        spanElement.innerText = "delete";
        // on ajoute un id correspondant à l'id du work a la span
        spanElement.id = work.id;
        // On crée l’élément img.
        const imageElement = document.createElement("img");
        // On accède à l’indice i de la liste works pour configurer la source de l’image.
        imageElement.src = work.imageUrl;
        // récuperer la balise ou l'on va mettre tout ca
        let galleryElement = document.querySelector(".gallery-modale");
        // on rattache la span à la balise figure
        figureElement.appendChild(spanElement);
        // On rattache l’image à la balise figure
        figureElement.appendChild(imageElement);
        // On rattache la balise figure à la galerie
        galleryElement.appendChild(figureElement);
    }

}