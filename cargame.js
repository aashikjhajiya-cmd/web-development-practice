const car = document.getElementById("car");
const game = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let carX = 0;
let carSpeed = 8;

let enemies = [];
let score = 0;
let gameOver = true;
let gameRunning = false;
let frame = 0;
let animationId;

function setCarPosition() {
    const maxX = game.clientWidth - car.offsetWidth;
    carX = Math.max(0, Math.min(carX, maxX));
    car.style.left = carX + "px";
    car.style.transform = "none";
}

function resetCar() {
    carX = (game.clientWidth - car.offsetWidth) / 2;
    setCarPosition();
}

function moveLeft() {
    if (!gameRunning) return;

    carX -= carSpeed;
    setCarPosition();
}

function moveRight() {
    if (!gameRunning) return;

    carX += carSpeed;
    setCarPosition();
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveLeft();
    }

    if (e.key === "ArrowRight") {
        e.preventDefault();
        moveRight();
    }

    if (e.key === " " && gameOver) {
        startGame();
    }
});

leftBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveLeft();
});

rightBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveRight();
});

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

function spawnEnemy() {
    const enemy = document.createElement("div");

    enemy.classList.add("enemy");

    enemy.textContent = "🚗";
    enemy.style.position = "absolute";
    enemy.style.fontSize = "45px";
    enemy.style.width = "55px";
    enemy.style.height = "55px";
    enemy.style.lineHeight = "55px";
    enemy.style.textAlign = "center";

    const maxX = game.clientWidth - 55;

    enemy.style.left = Math.floor(Math.random() * maxX) + "px";
    enemy.style.top = "-60px";

    game.appendChild(enemy);
    enemies.push(enemy);
}

function isCrash() {
    const carRect = car.getBoundingClientRect();

    for (const enemy of enemies) {
        const enemyRect = enemy.getBoundingClientRect();

        if (
            carRect.left < enemyRect.right &&
            carRect.right > enemyRect.left &&
            carRect.top < enemyRect.bottom &&
            carRect.bottom > enemyRect.top
        ) {
            return true;
        }
    }

    return false;
}

function endGame() {
    gameRunning = false;
    gameOver = true;

    cancelAnimationFrame(animationId);

    alert("💥 GAME OVER!\nYour Score: " + score);
}

function gameLoop() {
    if (!gameRunning) return;

    frame++;

    if (frame % 45 === 0) {
        spawnEnemy();
    }

    enemies.forEach((enemy, index) => {
        let top = parseFloat(enemy.style.top);

        top += 4 + score * 0.03;

        enemy.style.top = top + "px";

        if (top > game.clientHeight) {
            enemy.remove();
            enemies.splice(index, 1);

            score++;
            scoreDisplay.textContent = score;
        }
    });

    if (isCrash()) {
        endGame();
        return;
    }

    animationId = requestAnimationFrame(gameLoop);
}

function clearEnemies() {
    enemies.forEach(enemy => enemy.remove());
    enemies = [];
}

function startGame() {
    clearEnemies();

    score = 0;
    frame = 0;
    scoreDisplay.textContent = "0";

    gameOver = false;
    gameRunning = true;

    resetCar();

    cancelAnimationFrame(animationId);
    gameLoop();
}

function restartGame() {
    startGame();
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);

window.addEventListener("resize", function () {
    if (gameRunning) {
        setCarPosition();
    }
});

resetCar();
