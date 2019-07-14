class GameLogic {
    constructor(row) {
        this.pointer = 0;
        this.nextPointer = 1;
        this.row = row;
        this.score = 0;
    }

    getFields() {
        return this.row;
    }

    run() {
        this.row[this.pointer] === 0 || this.row[this.nextPointer] === 0 // check is first or second equal to zero
            ? this.skip()
            : this.count();
        return this;
    }

    setScore(value) {
        let currentScore = Number.parseInt(document.getElementById('score').innerHTML);
        document.getElementById('score').innerHTML = value + currentScore;
    }

    count() {
        if (this.row[this.pointer] === this.row[this.nextPointer]) {
            // if both fields are equal - clear them
            this.setScore(this.nextPointer);
            this.row[this.pointer] = 0;
            this.row[this.nextPointer] = 0;
        }

        this.row[this.pointer] > this.row[this.nextPointer] ? this.firstBigger() : this.nextBigger();
    }

    firstBigger() {
        var res = this.row[this.pointer] / this.row[this.nextPointer];
        if (Number.isInteger(res)) {
            this.setScore(this.row[this.nextPointer]);
            this.row[this.pointer] = res;
            console.log(currentScore, 'firstBigger score');
            this.row[this.nextPointer] = 0;
        } else {
            this.skip();
        }
    }

    nextBigger() {
        var res = this.row[this.nextPointer] / this.row[this.pointer];
        console.log(score, 'nextBigger score');
        if (Number.isInteger(res)) {
            this.setScore(this.row[this.pointer]);
            this.row[this.pointer] = 0;
            this.row[this.nextPointer] = res;
        } else {
            this.skip();
        }
    }

    skip() {
        if (this.row[this.pointer] === 0) {
            this.pointer++;
        }
        this.nextPointer++;
        if (this.row[this.nextPointer] != undefined) {
            this.run();
            return;
        }
        if (this.pointer == 0 && this.row[this.nextPointer] == undefined) {
            this.pointer++;
            this.nextPointer = this.pointer + 1;
            this.run();
            return;
        }
    }
}

export default GameLogic;
