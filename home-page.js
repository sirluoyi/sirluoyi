document.body.querySelector('.js-navbar-button').addEventListener('click', () => {
  document.body.querySelector('.js-navbar').classList.toggle('slide');
  document.body.querySelector('.js-navbar-button').classList.toggle('slide');
  document.body.querySelector('.overlay').classList.toggle('slide');
});