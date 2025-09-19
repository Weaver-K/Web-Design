document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const button = document.querySelector('#flip');

    button.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

document.getElementById('dark-lightMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-lightMode'); // This toggles the dark mode class on the body
});
