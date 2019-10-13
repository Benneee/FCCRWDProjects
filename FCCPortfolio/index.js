let toggleBtn = document.getElementsByClassName('toggle-button')[0];
let navBarLinks = document.getElementsByClassName('navbar-links')[0];

if (toggleBtn) {
  toggleBtn.addEventListener('click', dropdown);
}

function dropdown() {
  navBarLinks.classList.toggle('active');
}
