let car = document.getElementById("car");
let game = document.getElementById("gameArea");
let scoreDisplay = document.getElementById("score");

let carX = 170;
let carSpeed = 7;

let enemies = [];
let score = 0;
let gameOver = false;
let difficulty = 0.002; 

document.addEventListener("keydown", moveCar);

function moveCar(e) {
    if (e.key === "ArrowLeft" && carX > 0) {
        carX -= carSpeed;
    }
    if (e.key === "ArrowRight" && carX < 340) {
        carX += carSpeed;
    }
    car.style.left = carX + "px";
}


function spawnEnemy() {
    let enemy = document.createElement("img");
    enemy.src = "enemy.png";
    enemy.classList.add("enemy");
    enemy.style.left = Math.floor(Math.random() * 330) + "px";
    enemy.style.top = "-120px";

    game.appendChild(enemy);
    enemies.push(enemy);
}


function isCrash(car, enemy) {
    let c = car.getBoundingClientRect();
    let e = enemy.getBoundingClientRect();

    return !(
        c.bottom < e.top ||
        c.top > e.bottom ||
        c.right < e.left ||
        c.left > e.right
    );
}


let frame = 0;
function gameLoop() {
    if (gameOver) return;

    frame++;

    if (frame % 50 === 0) spawnEnemy();

    enemies.forEach((enemy, i) => {
        let top = parseInt(enemy.style.top);
        enemy.style.top = top + (3 + score * difficulty) + "px";

        if (top > 650) {
            enemy.remove();
            enemies.splice(i, 1);
            score++;
            scoreDisplay.textContent = score;
        }

       
        if (isCrash(car, enemy)) {
            alert("💥 CRASH! GAME OVER!\nYour Score: " + score);
            gameOver = true;
        }
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();
