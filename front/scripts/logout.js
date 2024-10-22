const btnLogout = document.getElementById('btnLogout');

btnLogout.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('user');
    window.location.href = 'login.html';
});