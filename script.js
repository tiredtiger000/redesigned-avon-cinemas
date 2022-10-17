const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navBarLinks = document.getElementsByClassName('navbar-links');
// const navBarLinks = document.getElementsByTagName('a');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navBarLinks.length; i++)
    navBarLinks[i].classList.toggle('active');
})