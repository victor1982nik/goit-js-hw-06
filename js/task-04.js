const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

btnIncrementRef.addEventListener('click', onIcrementButtonClick);

function onIcrementButtonClick() {
    counterValue += 1;    
    valueRef.textContent = counterValue;
}

btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})

