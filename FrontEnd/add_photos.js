import token from "./token.js";
function addPhoto(e) {
    let input = e.target;
    let image = document.querySelector('#upload img');
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
        image.style.display = "flex";
    }
}
let btnInput = document.getElementById("file");

btnInput.addEventListener('change', addPhoto);

let submit = document.getElementById("form_2");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    let image = document.getElementById("file").files[0];
    let title = document.getElementById("title").value;
    let category = document.getElementById("options").value;
    // Fonction pour obtenir la valeur numérique associée à la catégorie
    function getCategoryValue(category) {
        switch (category) {
            case "Objets":
                return 1;
            case "Appartements":
                return 2;
            case "Hotels & restaurants":
                return 3;
        }
    }
    let formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", getCategoryValue(category));
    fetch("http://localhost:5678/api/works", {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    })
        .then(response => {
            if (response.ok) {
                window.alert("Felicitation vous venez d'ajouter un nouveau projet!")
                let galleryModale = document.querySelector(".gallery-modale")
                const spanElement = document.createElement("span");
                // on ajoute une classe a la span 
                spanElement.classList.add("material-symbols-outlined");
                // on ajoute du hmtl à la span
                spanElement.innerText = "delete";
                // Création d'une balise figure 
                const figureElement = document.createElement("figure");
                // On crée l’élément img.
                const imageElement = document.createElement("img");
                // On accède à l’indice i de la liste works pour configurer la source de l’image.
                imageElement.src = "./assets/images/" + image.name;
                // on rattache la span à la balise figure
                figureElement.appendChild(spanElement);
                // On rattache l’image à la balise figure
                figureElement.appendChild(imageElement);
                // On rattache la balise figure à la galerie
                galleryModale.appendChild(figureElement);
                // Création d'une balise figure 
                const figureElement2 = document.createElement("figure");
                // Création d’une balise dédiée au titre
                const titleElement2 = document.createElement("figcaption");
                // On crée l’élément img.
                const imageElement2 = document.createElement("img");
                // On accède à l’indice i de la liste works pour configurer la source de l’image.
                imageElement2.src = "./assets/images/" + image.name;
                // On accède à l'indice i de la liste works pour configurer le title.
                titleElement2.innerText = title;
                // récuperer la balise ou l'on va mettre tout ca
                let galleryElement = document.querySelector(".gallery");
                // On rattache l’image à la balise figure
                figureElement2.appendChild(imageElement2);
                // On rattache le titre à la balise figure
                figureElement2.appendChild(titleElement2);
                // On rattache la balise figure à la galerie
                galleryElement.appendChild(figureElement2);
            }
            else {
                window.alert("Merci de remplir correctement tout les champs");
            }
        })

})
