// export de la fonction genererworks
export default genererWorks
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/works")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(works => {
        // Appel de la fonction genererWorks une fois que les données sont prêtes
        genererWorks(works);
    })
// Fonction qui génère les works
function genererWorks(works) {
    for (let work of works) {
        // Création d'une balise figure 
        const figureElement = document.createElement("figure");
        // Création d’une balise dédiée au titre
        const titleElement = document.createElement("figcaption");
        // On crée l’élément img.
        const imageElement = document.createElement("img");
        // On accède à l’indice i de la liste works pour configurer la source de l’image.
        imageElement.src = work.imageUrl;
        // On accède à l'indice i de la liste works pour configurer le title.
        titleElement.innerText = work.title;
        // récuperer la balise ou l'on va mettre tout ca
        let galleryElement = document.querySelector(".gallery");
        // On rattache l’image à la balise figure
        figureElement.appendChild(imageElement);
        // On rattache le titre à la balise figure
        figureElement.appendChild(titleElement);
        // On rattache la balise figure à la galerie
        galleryElement.appendChild(figureElement);
    }

}

