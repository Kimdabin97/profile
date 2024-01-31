const home = document.querySelector('.background_wrap');
const homeHeight = home.offsetHeight;
const top_button = document.querySelector(".arrow_up");

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight) {
        top_button.style.opacity = 1;
    } else {
        top_button.style.opacity = 0;
    }
})