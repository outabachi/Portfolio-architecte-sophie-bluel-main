import token from "./token.js";
function addPhoto(e) {
    let input = e.target;
    let image = document.querySelector('#upload img');
    if (input.files && input.files[0]) {
        image.src = "./assets/images/" + input.files[0].name;
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
// Récupérez les éléments nécessaires du DOM
let fileInput = document.getElementById('file');
let titleInput = document.getElementById('title');
let optionsSelect = document.getElementById('options');
let submitButton = document.getElementById('btn_modale_2');

// Ajoutez des écouteurs d'événements pour les changements dans les champs
fileInput.addEventListener('change', checkForm);
titleInput.addEventListener('input', checkForm);
optionsSelect.addEventListener('change', checkForm);

// Fonction pour vérifier si le formulaire est valide
function checkForm() {
    // Vérifiez si les champs nécessaires sont remplis
    let fileSelected = fileInput.files && fileInput.files[0];
    let titleFilled = titleInput.value.trim() !== '';
    let optionSelected = optionsSelect.value !== '';

    // Activez ou désactivez le bouton en fonction de la validité du formulaire
    submitButton.disabled = !(fileSelected && titleFilled && optionSelected);

    // Modifiez la couleur de fond du bouton en fonction de sa propriété disabled
    if (submitButton.disabled) {
        submitButton.style.backgroundColor = "#A7A7A7";
    } else {
        submitButton.style.backgroundColor = "#1D6154";
    }
}