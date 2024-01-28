function connection() {
    let submit1 = document.getElementById("form_1")
    submit1.addEventListener("submit", (event) => {
        // Désactivation du comportement par défaut du navigateur
        event.preventDefault();

        let email = document.getElementById("input_email").value;
        let password = document.getElementById("input_password").value;
        let identifiants = {
            email: email,
            password: password
        };
        fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(identifiants)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    window.alert("Email ou mot de passe incorrect");
                }
            })
            .then(data => {
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("token", data.token);
                window.location.href = './index.html';
            })
    })
};
connection()
