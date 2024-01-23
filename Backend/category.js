let divFiltres = document.getElementById("filtres");
//declaration de la variable works 
let works;
// Récupération des works depuis l'API
fetch("http://localhost:5678/api/categories")
    // Parse la réponse en JSON
    .then(response => response.json())
    .then(categories => {
        for (let category of categories) {
            let btnCategory = document.createElement('button');
            btnCategory.textContent = category.name;
            btnCategory.dataset.categoryId = category.id;
            divFiltres.appendChild(btnCategory);
        
        }
        
    })


