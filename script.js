// Responsive Navbar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// scroll to top effect 
const scrollTopButton = document.querySelector('.scroll');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
    scrollTopButton.style.display = 'block';
} 
    else {
    scrollTopButton.style.display = 'none';
}
});
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});