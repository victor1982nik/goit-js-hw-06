const inputRef = document.querySelector('input');
const btnDataCreateRef = document.querySelector('button[data-create]');
const btnDataDestroyRef = document.querySelector('button[data-destroy]');
const markup = document.querySelector('#boxes');

btnDataDestroyRef.addEventListener('click', destroyBoxes);
btnDataCreateRef.addEventListener('click', createBoxesHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxesHandler() {
  createBoxes(inputRef.value);    
}

function createBoxes(amount) {
  let size = 30;
  let arr = [];  
  for (let i = 0; i < inputRef.value; i += 1) {    
    let str = `<div style="width:${size}px;height:${size}px;background-color:${getRandomHexColor()};"></div>`;
    size += 10;
    arr.push(str);    
  }  
  markup.insertAdjacentHTML("afterbegin", arr.join(""));  
}

function destroyBoxes() {
  markup.innerHTML = '';
  inputRef.value = 0;
}
//v2
// function createBoxes(amount) {
//   let size = 30;
//   let arr = [];
//   for (let i = 0; i < inputRef.value; i += 1) {
//     arr.push(makeElement(size)); 
//     size += 10;    
//   }
//   markup.insertAdjacentHTML("afterbegin", arr.join(""));  
// }

// makeElement(size) {
//   return `<div style="width:${size}px;height:${size}px;background-color:${getRandomHexColor()};"></div>`
}