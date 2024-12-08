function toggleMenu() {
    const sidebar = document.querySelector('.sidebar_nav');
    sidebar.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar_nav');

    menuBtn.addEventListener('click', function () {
        sidebar.classList.toggle('visible');
    });
});

