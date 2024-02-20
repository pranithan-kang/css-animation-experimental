// TODO: Improve this code

window.onload = function() {
    let skyStarContainer = document.querySelector('.sky-star-container');

    let starTemplate = document.createElement('span');
    starTemplate.classList.add('star-blink');
    starTemplate.style.position = 'relative';

    function createStars() {
        for (let i = 0; i < 100; i++) {
            let starElem = starTemplate.cloneNode();
            starElem.style.left = Math.floor(Math.random() * 100) + 'vw';
            starElem.style.top = Math.floor(Math.random() * 100) + 'vh';
            starElem.style.animationDuration = Math.floor(Math.random() * 1000) + "ms";
            setTimeout(function() {
                skyStarContainer.appendChild(starElem);
            }, i*10);
        }
    }

    createStars();
}