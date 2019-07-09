class DragLogic {
    constructor() {
        const dragEl = document.getElementById('second');
        dragEl.addEventListener('dragstart', this.dragStart.bind(this));
        dragEl.addEventListener('dragend', this.dragEnd);

        const dropKeep = document.getElementById('keep');
        dropKeep.addEventListener('dragover', this.dragOver);
        dropKeep.addEventListener('dragenter', this.dragEnter);
        dropKeep.addEventListener('drop', this.dropKeep.bind(this));
        dropKeep.addEventListener('dragstart', this.dragStart.bind(this));

        this.addListeners();
    }

    addListeners() {
        const celles = document.querySelectorAll('.cell ');
        for (const cell of celles) {
            cell.addEventListener('dragover', this.dragOver);
            cell.addEventListener('dragenter', this.dragEnter);
            // cell.addEventListener('dragleave', this.dragLeave);
            cell.addEventListener('drop', this.dragDrop.bind(this));
        }
    }

    onDrop(callback) {
        this.onDropCb = callback;
        return this;
    }

    onDropKeep(callback) {
        this.dropKeep = callback;
        return this;
    }
    dragStart(event) {
        let element = event.currentTarget;
        this.selectedElement = element;
        element.className += 'hold';
        setTimeout(() => (element.className = 'invisible'), 0);
    }

    // dragEnd(event) {}

    dragOver(event) {
        event.preventDefault();
    }

    dragEnter(event) {
        event.preventDefault();
    }
    // dragLeave() {}
    dragDrop(event) {
        this.onDropCb.call(this, event.currentTarget, this.selectedElement);
        this.addListeners();
    }
    dropKeep() {
        this.dropKeep.call(this, event.currentTarget, this.selectedElement);
    }
}

export default DragLogic;
