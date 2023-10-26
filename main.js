particlesJS.load('particles-js', 'banner.json');

const productBtn = document.querySelector('.header__btn__products');
const dropdown = document.querySelector('.dropdown');
let delayTimeout;

productBtn.addEventListener('mouseover', () => {
    clearTimeout(delayTimeout);
    dropdown.classList.add('dropdown--active');
});

document.addEventListener('mouseover', (event) => {
    if (event.target !== productBtn && event.target !== dropdown) {
        clearTimeout(delayTimeout);
        delayTimeout = setTimeout(() => {
            removeDropdownActive();
        }, 200);
    } else {
        clearTimeout(delayTimeout);
    }
});

function removeDropdownActive() {
    dropdown.classList.remove('dropdown--active');
}
