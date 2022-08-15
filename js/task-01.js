const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const categories = document.querySelectorAll('.item');

categories.forEach((el) => {      
    console.log('');
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);      
})