
class Calc {

    resultInput = document.getElementById('resultInput')

    buttons = document.getElementsByClassName('btn')

    constructor()
    {
        this.addEventListenerToButtons()
    }

    addEventListenerToButtons()
    {
        for (let index = 0; index < this.buttons.length; index++) 
        {
            const button = this.buttons[index];

                                             // callback fn
            button.addEventListener('click', event => {

                console.log(event.target.innerText);
                let btnTitle = event.target.innerText
                
                if (btnTitle == '='){
                    this.calculateResult()
                } else {
                    this.resultInput.value += btnTitle
                }

            })
            
        }
    }

    calculateResult(){
        this.resultInput.value = eval(this.resultInput.value)
    }

}


let myCalc = new Calc()
//myCalc.addEventListenerToButtons()

console.log(myCalc.buttons)

// old fasion function
// this visible only in this function 
/*
function multiply(x, y){
    console.log(this);
    return x * y
}


// new fasion 
function multiply (x){
    return 'Hello!'
}


//let multiply = () => 'Hello!'
//let multiply = () => 'Hello ' + x + '!'
// let multiply = (x, y) => x * y
let multiply = (x, y) => {
    if (x > 0 && y > 0) return x * y
    //else throw Error('x or y must be be grater than zero')
    // else 1 + 0
    console.log(this);
} 

console.log(multiply(0, 5));
*/

/*
let arr = {
    oldFn: function(){
        console.log(this);
    },
    newFn: x => {
        console.log(this);
    }
}

arr.newFn()
*/