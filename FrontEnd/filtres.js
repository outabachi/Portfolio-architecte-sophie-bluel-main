// import de la fonction genererworks
import genererWorks from "./works.js";
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/works")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(works => {
        // Sélection de tous les boutons
        let categoryElements = document.querySelectorAll("button");

        // Ajout d'un gestionnaire d'événements à chaque bouton

        categoryElements.forEach(button => {
            button.addEventListener("click", () => {

                // Sélectionnez toutes les balises figure dans la class galery

                let galleryFigures = document.querySelector(".gallery");

                // Supprime tout ce qu'il y a dans la balise de classe gallery
                galleryFigures.innerHTML = "";

                // Supprime la classe "active" de tous les boutons
                categoryElements.forEach(btn => {
                    btn.classList.remove("active");
                });

                // Ajoute la classe "active" au bouton cliqué
                button.classList.add("active");

                // Affiche les works en fonction de la catégorie du bouton cliqué
                let worksByCategory = works.filter(work => work.category.id == button.dataset.categoryId);
                if (button.dataset.categoryId !== "0") {
                    genererWorks(worksByCategory);
                }
                else {
                    // afficher tous les works 
                    genererWorks(works);

                }
            });
        });
    })