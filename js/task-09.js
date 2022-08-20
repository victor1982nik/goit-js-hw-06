const btnChangeColorRef = document.querySelector('button.change-color');
const spanColorRef = document.querySelector('.color');
const bodyRef =  document.querySelector('body');

btnChangeColorRef.addEventListener('click', OnBtnClickHaldler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function OnBtnClickHaldler() {
  const color = getRandomHexColor();  

  bodyRef.style.backgroundColor = color;
  spanColorRef.textContent = color;
}
