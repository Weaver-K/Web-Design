document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const button = document.querySelector('#flip-button');

    button.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});