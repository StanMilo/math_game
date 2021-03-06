import GameLogic from './game-logic';

class Board {
    constructor(fields) {
        this.fields = fields;
    }
    render() {
        let HTML = '';
        for (let key in this.fields) {
            HTML += `<div class="row">`;
            for (var cell in this.fields[key]) {
                let cellColor = this.fields[key][cell] == 0 ? '' : 'hasNumb';
                HTML += `<div class="cell ${cellColor}" id="cell" data-row="${key}" data-field="${cell}">${this.fields[
                    key
                ][cell]}</div>`;
            }
            HTML += `</div>`;
        }
        document.getElementById('container_board').innerHTML = HTML;
    }
    // example 0, 0, 1
    // ptvo levo polje vrednost 1
    add(row, field, value) {
        if (this.fields[row][field] !== 0) {
            throw Error('It is not empty');
        }
        this.fields[row][field] = Number.parseInt(value);
        let gameLogic = new GameLogic(this.fields[row]);
        this.fields[row] = new GameLogic(this.fields[row]).run().getFields();
        this.fields[row] = new GameLogic(this.fields[row]).run().getFields();
        console.log(this.fields[row]);
        this.render();
    }
}

export default Board;
