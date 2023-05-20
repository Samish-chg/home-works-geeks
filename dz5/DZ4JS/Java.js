var counterElement = document.getElementById('counter');
var decrementButton = document.getElementById('decrement');
var incrementButton = document.getElementById('increment');

var counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateCounter();
    counterElement.classList.add('green');
    counterElement.classList.remove('red');
}

function decrementCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
        counterElement.classList.add('red');
        counterElement.classList.remove('green');
    }
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);



var mybutton=document.getElementById('my button')
var updat=document.getElementById('updat')
var text=''
function textUpdate (){
    var input=prompt('Введите текст')
    if(input !== null){
        text=input
    }
    updat.textContent=text
}
mybutton.addEventListener('click',textUpdate)

var service=prompt('Введите цвета ')

function color(service){
    var colorRed=document.querySelector('.color__red')
    var colorYellow=document.querySelector('.color__yellow')
    var colorGreen=document.querySelector('.color__green')
    var colorText=document.querySelector('.color__text')
    switch (service) {
        case 'красный':
            colorRed.style.backgroundColor='red'
            colorText.innerText='STOP!!!'
            break
        case 'желтый':
            colorYellow.style.backgroundColor='yellow'
            colorText.innerText='Wait!'
            break
        case 'зеленый':
            colorGreen.style.backgroundColor='green'
            colorText.innerText='go!!!'
            break
        default:
            alert('ощибка неправильный цвет')

    }
}
color(service)

