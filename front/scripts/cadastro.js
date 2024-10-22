const formTurma = document.getElementById('formTurma');

formTurma.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        nome: formTurma.nomeTurma.value,
        id_professor: userLogado.id
    };

    fetch('http://localhost:3001/turma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        userLogado.turmas.push(data);
        localStorage.setItem('user', JSON.stringify(userLogado));
        window.location.reload();
      });
});

