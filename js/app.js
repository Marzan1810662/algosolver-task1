console.log('script.js connected');

// console.log(document.getElementsByClassName('box'));
// console.log(document.querySelectorAll('.box'));

const columns = document.getElementsByClassName('column');
const boxes = document.getElementsByClassName('box');

console.log(columns);
console.log(boxes);

/* add events to dragble boxes */
for (const box of boxes) {
    /* when the drag events starts a class 'dragging' will be added to the dragged div */
    box.addEventListener('dragstart', () => {
        //console.log('drag start');
        //box.classList.add('dragging');
        box.id='dragging';
        console.log(box);
    })
    /* when the drag events ends the class will be removed from the dragged div */
    box.addEventListener('dragend', () => {
        //console.log('drag end');
       // box.classList.remove('dragging');
       box.removeAttribute('id')
       console.log(box);
    })
}

for (const column of columns) {
    column.addEventListener('dragover', (e) => {
        console.log('draging over column');
        //prevent the default behaviour that is not letting any element be dropped inside the column div
        e.preventDefault();
        //const currentDraggringBox = document.getElementsByClassName('dragging');
        const currentDraggringBox = document.getElementById('dragging');
        console.log( currentDraggringBox);
        //column.appendChild(currentDraggringBox[0])
        column.appendChild(currentDraggringBox)

    })
}