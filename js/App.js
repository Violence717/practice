const input = document.querySelector('.app__input');
const button = document.querySelector('.app__button');

const circle = document.querySelector('.circle');
const circleText = document.querySelector('.circle__text');

button.addEventListener('click', () => {

    if (document.getElementById('male').checked || document.getElementById('female').checked && input.value.length > 0) {

        if (document.getElementById('male').checked) {
    
            if (input.value >= 60) {
                circleText.textContent = 'Поздравляем! Вы пенсионер.';
            } else {
                circleText.textContent = 'Сожалеем, вы не пенсионер.';
            }
        
        } else if (document.getElementById('female').checked) {
        
            if (input.value >= 55) {
                circleText.textContent = 'Поздравляем! Вы пенсионер.';
            } else {
                circleText.textContent = 'Сожалеем, вы не пенсионер.';
            }
            
        }

    } else {
        circleText.textContent = 'Вы не выбрали пол или возраст.';
    }

    circle.classList.remove('circle_hidden');

    setTimeout(() => circle.classList.add('circle_hidden'), 5000);

});

