let meme = document.getElementById("memeImage");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let moveInterval = null;

// FUNCTION: Move image randomly every 500ms
function startMoving() {

    // Prevent multiple intervals
    if (moveInterval !== null) return;

    moveInterval = setInterval(() => {
        let maxX = window.innerWidth - meme.width;
        let maxY = window.innerHeight - meme.height;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        meme.style.left = randomX + "px";
        meme.style.top = randomY + "px";
    }, 500);
}

// FUNCTION: Stop the movement
function stopMoving() {
    clearInterval(moveInterval);
    moveInterval = null;
}

// EVENT-DRIVEN PROGRAMMING
startBtn.addEventListener("click", startMoving);
stopBtn.addEventListener("click", stopMoving);
