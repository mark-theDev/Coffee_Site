//functionality of hamburger button 

const hamburgerBtn = document.querySelector('.hamburgerBtn');
const menuLinks = document.querySelector('.menu_links');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

