// Autor: Christopher Pederson

//loads particle effect for banner
particlesJS.load('particles-js', 'banner.json');


//decleration of necessay variables
const productBtn = document.querySelector('.header__btn__products');
const dropdown = document.querySelector('.dropdown');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
let delayTimeout;
let isMouseOverDropDown;

//monitors to see if the mouse is over JUST the product button
productBtn.addEventListener('mouseover', () => {
    clearTimeout(delayTimeout);
    dropdown.classList.add('dropdown--active');
    productBtn.innerHTML = 'Products&#11165';
});

//monitors to see if the mouse is over the dropdown menu or any of the elements marked as dropdown items
//if the mouse is over an item isMouseOverDropDown is set to true
//it searches the array of elements marked as dropdown items to see if any match the event.target
//if isMouseOverDropDown is false then the dropdown menu is removed
document.addEventListener('mouseover', (event) => {

    isMouseOverDropDown = dropdownItems.some(item => event.target === item);

    if (!isMouseOverDropDown) {
        clearTimeout(delayTimeout);
        delayTimeout = setTimeout(() => {
            removeDropdownActive();
        }, 300);
    } else {
        clearTimeout(delayTimeout);
    }
});

//removes the dropdown menu and changes the product button text back to normal
function removeDropdownActive() {
    productBtn.innerHTML = 'Products&#11167';
    dropdown.classList.remove('dropdown--active');
}
