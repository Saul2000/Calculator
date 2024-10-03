class Display {
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operatorType = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            addition: '+',
            division: '/',
            multiplication: 'x',
            substraction: '-',
        }
    }
    deleteOne(){ //Poder borrar Valores de uno en uno
        this.currentValue = this.currentValue.toString().slice(0,-1); 
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.operatorType = undefined;
        this.printValues();
    }

    compute(type){
        this.operatorType !== 'equal' && this.calculate(); //A pesar de que el Tipo de operación no es Equal se va a calcular el resultado 
        this.operatorType = type;
        this.previousValue = this.currentValue || this.previousValue; //Se validará que el Current vaya al Previous 
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return //Si ya hay un Punto no dejará colocar más
        this.currentValue = this.currentValue.toString() + number.toString(); //Agrega el Number al Dsiplay y concatena con los que estan previamnente y con puntos
        this.printValues(); //Muestra los numeros en pantalla
    }

    printValues(){
        this.displayCurrentValue.textContent = this.currentValue; 
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operatorType] || ''}`;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue)) return //Validar si los datos no son numeros, no regresará nada
        this.currentValue = this.calculator[this.operatorType](previousValue, currentValue);
    }
}