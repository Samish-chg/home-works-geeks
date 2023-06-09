const button = document.createElement("button")

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'img/ground.png'

const foodImg = new Image()
foodImg.src = 'img/food.png'

const foodOrange = new  Image()
foodOrange.src = 'img/curn.png'

const foodApple = new Image()
foodApple.src = 'img/brocoli.png'

let arrFood = [foodImg,foodApple,foodOrange]
const randomFood = () => {
  // const count = Math.floor(Math.random()*3)
    const count = Math.round(0 - 0.5 + Math.random() * (arrFood.length - 1 - 0 + 1))
    return arrFood[count]
}

let randomNum = randomFood()
let box = 32
let score = 0

let food = {
    x: Math.floor( (Math.random() * 17 + 1)) * box ,
    y: Math.floor( (Math.random() * 15 + 3)) * box ,
}

let snake = []
snake[0] = {
    x: 9 * box,
    y: 10 * box,
}


let dir

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 37 && dir !== 'right') dir = 'left'
    else if (event.keyCode === 38 && dir !== 'down') dir = 'up'
    else if (event.keyCode === 39 && dir !== 'left') dir = 'right'
    else if (event.keyCode === 40 && dir !== 'up') dir = 'down'
})

function setModal() {
    const div_parent = document.createElement('div')

    div_parent.setAttribute('class', 'modal')

    document.body.append(div_parent)

    const div_child = document.createElement('div')
    div_child.setAttribute('class','div_child')

    div_parent.append(div_child)

    const div_child_inner = document.createElement('div')

    div_child_inner.setAttribute('class','div_child_inner')

    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')

    button.setAttribute('id','button_start')

    h1.setAttribute('class','h1_class')
    h2.setAttribute('class','h2_class')


    div_child.append(h1)

    div_child.append(div_child_inner)

    div_child_inner.append(h2)
    div_child_inner.append(h3)

    div_child.append(button)

    button.innerText = "restart"
    h1.innerText = 'Game over'
    h2.innerText = 'ваш результат'
    h3.innerText = score;

    document.body.append(div_parent)

    button.addEventListener('click',()=>{
        location.reload()
    })
    document.addEventListener('keydown',(event)=>{
    if (event.keyCode === 13){
        location.reload()
    }
    })



}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x === arr[i].x && head.y === arr[i].y) {
            clearInterval(game)
            setModal()
        }
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(randomNum, food.x, food.y)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'darkgreen' : 'green'
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }

    ctx.fillStyle = 'white'
    ctx.font = '50px Arial'
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (snakeX === food.x && snakeY === food.y) {
        score++
        randomNum = randomFood()
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
    } else snake.pop()

    if (snakeX < box || snakeX > box * 17 || snakeY < box * 3 || snakeY > box * 17) {
        clearInterval(game)
        setModal()
    }


    if (dir === 'left') snakeX -= box
    if (dir === 'right') snakeX += box
    if (dir === 'up') snakeY -= box
    if (dir === 'down') snakeY += box

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    eatTail(newHead, snake)

    snake.unshift(newHead)
}

let game = setInterval(drawGame, 150)


