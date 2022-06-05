console.log('script.js connected');

// console.log(document.getElementsByClassName('box'));
// console.log(document.querySelectorAll('.box'));

const columns = document.getElementsByClassName('column');
const boxes = document.getElementsByClassName('box');

console.log(columns);
console.log(boxes);

for (const box of boxes) {
    //when the drag events starts a class 'dragging' will be added to the dragged div
    box.addEventListener('dragstart', () => {
        console.log('drag start');
        box.classList.add('dragging');
    })
    //when the drag events ends the class will be removed from the dragged div
    box.addEventListener('dragend', () => {
        console.log('drag end');
        box.classList.remove('dragging');

    })
}