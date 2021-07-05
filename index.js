class Calculator {
    constructor(current_display, previous_display) {
        this.current_display = current_display;
        this.previous_display = previous_display;
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';

    }
    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
    }
    clear_last_entered() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
    }
    append_Number(incoming_number) {
        if (this.currentNumber == '0' && incoming_number == '0') return
        if (this.currentNumber.includes('.') && incoming_number.includes('.')) return
        this.currentNumber += incoming_number;
    }

    chooseOperation(option) {
        if (this.currentNumber == '') return
        this.operation = option;
        if (this.previousNumber !== '') this.compute();
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';

    }

    compute() {
        let compute;
        let current = parseFloat(this.currentNumber);
        let prev = parseFloat(this.previousNumber);
        if (isNaN(current) && isNaN(prev)) return;
        switch (this.operation) {
            case '+':
                compute = prev + current;
                break;
            case '-':
                compute = prev - current;
                break;
            case 'X':
                compute = prev * current;
                break;
            case '%':
                compute = (prev + current) / 100;

                break;
            case '÷':
                compute = prev / current;

                break;
            default:
                break;
        }
        this.previousNumber = '';
        this.operation = ''
        this.currentNumber = compute;


    }

    display() {
        this.current_display.innerHTML = this.currentNumber;
        this.previous_display.innerHTML = this.previousNumber + this.operation;
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
operation.forEach(option => {
    option.addEventListener('click', (e) => {
        calculator.chooseOperation(e.target.innerHTML);
        calculator.display();
    })
})

clear.addEventListener('click', (e) => {
    calculator.clear();
    calculator.display();
})
clear_lastone.addEventListener('click', (e) => {
    calculator.clear_last_entered();
    calculator.display();
})

equal.addEventListener('click', (e) => {
    calculator.compute();
    calculator.display();
})