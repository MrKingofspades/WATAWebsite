const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const dropDownMenu = document.getElementById('dropdown-menu');

    const toggleMenu = () => {
        dropDownMenu.classList.toggle('hidden');
        dropDownMenu.classList.toggle('absolute');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    dropDownMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);