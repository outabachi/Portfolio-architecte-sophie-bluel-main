import token from "./token.js";

// export de la fonction deleteWorks
export default deleteWorks
function deleteWorks() {
    let poubellesList = document.querySelectorAll(".gallery-modale span");
    poubellesList.forEach((poubelle) => {
        poubelle.addEventListener("click", () => {
            fetch("http://localhost:5678/api/works/" + poubelle.id, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                if (response.ok) {
                    poubelle.parentNode.remove();
                    let figureElement = document.querySelectorAll(".gallery figure");
                    for (let figure of figureElement) {
                        if (figure.dataset.id == poubelle.id) {
                            figure.remove();
                        }
                    }
                }
            })
        });
    });
}
