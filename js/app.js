

const columns = document.getElementsByClassName('column');
const boxes = document.getElementsByClassName('box');


/* add events to dragble boxes */
for (const box of boxes) {
    /* ------------------when the drag events starts a class 'dragging' will be added to the dragged div------------------ */
    box.addEventListener('dragstart', () => {
        //box.classList.add('dragging');
        box.id = 'dragging';
    })
    /* --------------when the drag events ends the class will be removed from the dragged div-------------- */
    box.addEventListener('dragend', () => {
        // box.classList.remove('dragging');
        box.removeAttribute('id')
    })
}

/* add event to columns */
for (const column of columns) {
    column.addEventListener('dragover', (e) => {
        /* ----------- prevent the default behaviour that is not letting any element be dropped inside the column div-------------- */

        //const currentDraggringBox = document.getElementsByClassName('dragging');
        const currentDraggringBox = document.getElementById('dragging');
        const boxesOfCurrenrtColumn = column.children;
        let count = 0
        for (const box of boxesOfCurrenrtColumn) {
            if (currentDraggringBox.classList[1] === box.classList[1]) {
                count = count + 1;
            }
        }
        if (count === 0) {
            e.preventDefault();
            column.appendChild(currentDraggringBox);
            //column.appendChild(currentDraggringBox[0]);
        }
    })
}