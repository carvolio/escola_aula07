const userName = document.getElementById('userName');
const userLogado = JSON.parse(localStorage.getItem('user'));
const tableContent = document.getElementById('tableContent');
const modalConfirm = document.getElementById('modalConfirm');
const btnConfirm = document.getElementById('btn-confirm');
const btnConfirmNo = document.getElementById('btn-confirm-no');
const modalView = document.getElementById('modalView');
const tableContentAti = document.getElementById('tableContentAti');
const btnAddShow = document.getElementById('btn-add-show'); 
const addAtiDiv = document.getElementById('addAtiDiv');
const formAti = document.getElementById('formAti');
const titleView = document.getElementById('titleView');

userName.textContent = userLogado.nome;

formAti.addEventListener('submit', async (event) => {
    event.preventDefault();

    const idString = formAti.parentNode.parentNode.querySelector('h4').textContent;
    const id = parseInt(idString.slice(idString.lastIndexOf(' ') + 1));
    console.log(id);

    const data = {
        nome: formAti.nomeAti.value,
        descricao: formAti.descricaoAti.value,
        id_turma: id,
        dataEntrega: formAti.dataAti.value
    };

    console.log(data);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
    const postAti = `http://localhost:3001/atividade`;
    const response = await fetch(postAti, options);
    const dataFetch = await response.json();

    console.log(dataFetch);
    formAti.reset();
    window.location.reload();
    
});

btnAddShow.addEventListener('click', () => {
    if (addAtiDiv.style.display == 'block') {
        addAtiDiv.style.display = 'none';
    } else {
        addAtiDiv.style.display = 'block';
    }
});

const abrirModalView = async (idView, nameView) => {
    modalView.style.display = 'block';

    const getAti = `http://localhost:3001/atividade/${idView}`;
    const reponse = await fetch(getAti);
    const data = await reponse.json();

    // console.log(data);
    // console.log(btnView);

    titleView.textContent = `Turma: ${nameView}, Id: ${idView}`;
    tableContentAti.innerHTML = ' ';

    for (let i in data) {
        tableContentAti.innerHTML += `<tr>
            <td>${data[i].id_turma}</td>
            <td>${data[i].nome}</td>
            <td>${data[i].descricao}</td>
        </tr>`;
    };
};

const confirmation = (idDel) => {
    event.preventDefault();
    modalConfirm.style.display = 'block';

    btnConfirm.addEventListener('click', () => {
        modalConfirm.style.display = 'none';
        del(idDel);
    });
    btnConfirmNo.addEventListener('click', () => {
        modalConfirm.style.display = 'none';
    });
};

const del = (idDel) => {

    fetch(`http://localhost:3001/turma/${idDel}`, {
        method: 'DELETE'
    });

    for (let i in userLogado.turmas) {
        if (userLogado.turmas[i].id == idDel) {
            userLogado.turmas.splice(i, 1);
        };
    };
    localStorage.setItem('user', JSON.stringify(userLogado));
    window.location.reload();
};

for (let i in userLogado.turmas) {
    tableContent.innerHTML += `<tr>
        <td>${userLogado.turmas[i].id}</td>
        <td>${userLogado.turmas[i].nome}</td>
        <td><button class="btn-del">Excluir</button></td>
        <td><button class="btn-view">Visualizar</button></td>
    </tr>`;
    
    const btnDel = tableContent.querySelectorAll('.btn-del');
    btnDel.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const idDel = btn.parentNode.parentNode.firstElementChild.textContent;
            confirmation(idDel);
        });
    });

    const btnView = tableContent.querySelectorAll('.btn-view');
    btnView.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const idView = btn.parentNode.parentNode.firstElementChild.textContent;
            const nameView = btn.parentNode.parentNode.querySelectorAll('td');
            abrirModalView(idView, nameView[1].textContent);
        });
    });
};

