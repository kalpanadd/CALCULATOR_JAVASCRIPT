class Calculator {
    constructor(current_display, previous_display) {
        this.current_display = current_display;
        this.previous_display = previous_display;
        this.currentNumber = '';
    }
    clear() {

    }
    clear_last_entered() {

    }
    append_Number(incoming_number) {
        this.currentNumber += incoming_number;

    }
    chooseOperation() {

    }
    compute() {

    }
    display() {
        this.current_display.innerHTML = this.currentNumber;
        //this.previous_display.innerHTML = this.previousNumber;
    }
}


current_display = document.querySelector('.current');
previous_display = document.querySelector('.previous');

number = document.querySelectorAll('.number');
operation = document.querySelectorAll('.operation');

clear = document.querySelector('.clear');
clear_lastone = document.querySelector('.clear_last');
equal = document.querySelector('.equal');

calculator = new Calculator(current_display, previous_display)

number.forEach(num => {
    num.addEventListener('click', (e) => {
        calculator.append_Number(e.target.innerHTML);
        calculator.display();
    })

});
