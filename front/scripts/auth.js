const entrar = document.getElementById('formLogin');

var user = {};

entrar.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        email: entrar.email.value,
        senha: entrar.senha.value
    };


    fetch('http://localhost:3001/professor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // const { data, error} = resposta;
            console.log(data.nome);
            if (data.nome) {
                user = data;
                console.log(user);
                window.localStorage.setItem('user', JSON.stringify(user));
                window.location.href = 'home.html';
            }

        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

// console.log(user)
console.log(localStorage.getItem('user'));