
canvas = document.getElementById("mysnake");

context = canvas.getContext("2d"); //....
box = 32;
snake = [];
snake[0] = {
    x: 4 * box,
    y: 4 * box
}
direction = "left";
food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let myset = setInterval(MainFun, 150);

function MainFun() {

    if (snake[0].x > 15 * box && direction == "right") {
        snake[0].x = 0;
    }
    if (snake[0].x < 0 && direction == 'left') {
        snake[0].x = 16 * box;
    }
    if (snake[0].y > 15 * box && direction == "down") {
        snake[0].y = 0;
    }
    if (snake[0].y < 0 && direction == 'up') {
        snake[0].y = 16 * box;
    }
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(myset);
            alert('Game Over :(');
        }
    }

    Drawbackground();
    DrawSnake();
    DrawFood();

    snakeX = snake[0].x;
    snakeY = snake[0].y;

    if (direction == "right") {
        snakeX += box;
    }
    if (direction == "left") {
        snakeX -= box;
    }
    if (direction == "up") {
        snakeY -= box;
    }
    if (direction == "down") {
        snakeY += box;
    }

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}




function Drawbackground() {
    context.fillStyle = "white";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
function DrawSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function DrawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') {
        direction = 'left';
    }
    if (event.keyCode == 38 && direction != 'down') {
        direction = 'up';
    }
    if (event.keyCode == 39 && direction != 'left') {
        direction = 'right';
    }
    if (event.keyCode == 40 && direction != 'up') {
        direction = 'down';
    }
}