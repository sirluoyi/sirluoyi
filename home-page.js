document.body.querySelector('.js-navbar-button').addEventListener('click', () => {
  document.body.querySelector('.js-navbar-parent').classList.toggle('slide');
})

document.body.querySelector('.navbar-toggle-button').addEventListener('click', () => {
  document.body.querySelector('.js-navbar-parent').classList.toggle('slide');
})


document.body.querySelector('.js-navbar-button').addEventListener('click', () => {
  document.body.querySelector('.overlay').classList.toggle('slide');
})

document.body.querySelector('.navbar-toggle-button').addEventListener('click', () => {
  document.body.querySelector('.overlay').classList.toggle('slide');
})