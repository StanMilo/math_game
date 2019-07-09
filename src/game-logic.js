class GameLogic {
    constructor(row) {
        this.pointer = 0;
        this.nextPointer = 1;
        this.row = row;
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

    count() {
        if (this.row[this.pointer] === this.row[this.nextPointer]) {
            // if both fields are equal - clear them
            this.row[this.pointer] = 0;
            this.row[this.nextPointer] = 0;
        }

        this.row[this.pointer] > this.row[this.nextPointer] ? this.firstBigger() : this.nextBigger();
    }

    firstBigger() {
        var res = this.row[this.pointer] / this.row[this.nextPointer];
        if (Number.isInteger(res)) {
            this.row[this.pointer] = res;
            this.row[this.nextPointer] = 0;
        } else {
            this.skip();
        }
    }

    nextBigger() {
        var res = this.row[this.nextPointer] / this.row[this.pointer];
        if (Number.isInteger(res)) {
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
        }
    }
}

export default GameLogic;
