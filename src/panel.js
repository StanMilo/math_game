class Panel {
    constructor() {}

    generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    render() {
        // TOODO - popunjava sa random
        document.getElementById('first').innerHTML = this.generateRandomInteger(2, 49);
        document.getElementById('first2').innerHTML = this.generateRandomInteger(2, 49);
        document.getElementById('second').innerHTML = this.generateRandomInteger(2, 49);
    }

    moveToKeep() {
        document.getElementById('keep').innerHTML = document.getElementById('second').innerHTML;
        return this;
    }
    moveValue() {
        document.getElementById('second').innerHTML = document.getElementById('first2').innerHTML;
        document.getElementById('first2').innerHTML = document.getElementById('first').innerHTML;
        document.getElementById('first').innerHTML = this.generateRandomInteger(2, 12);
    }
}
export default Panel;
