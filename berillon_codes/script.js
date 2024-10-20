window.onscroll = function() {stickyNav()};

const navBar = document.querySelector('.nav-bar');
const sticky = navBar.offsetTop;

function stickyNav() {
    if (window.scrollY > sticky) {  // Use scrollY instead of pageYOffset
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
}
