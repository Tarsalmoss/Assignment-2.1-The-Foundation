// Getting the meme image so we can move it around
const memeImg = document.getElementById('memeImage');

// Getting both buttons so we can turn them on/off
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// This is where I show messages instead of using alerts
const messageBox = document.getElementById('messageBox');

// This stores the interval ID so I can stop the movement later
let moveIntervalId = null;

// How often the meme moves (in milliseconds)
const MOVE_INTERVAL_MS = 500;



// This function figures out the max X and Y so the meme stays on screen
function calculateMaxPositions() {
    const maxX = window.innerWidth - memeImg.clientWidth;
    const maxY = window.innerHeight - memeImg.clientHeight;
    return { maxX, maxY };
}



// Moves the image one time to a random spot
function moveImageOnce() {
    const { maxX, maxY } = calculateMaxPositions();

    // Picks random spots inside the screen
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Moves the meme
    memeImg.style.left = randomX + 'px';
    memeImg.style.top = randomY + 'px';
}



// This actually starts moving the meme
function startMoving() {

    // If it's already moving, no need to start again
    if (moveIntervalId !== null) {
        messageBox.innerHTML = "It's already moving!";
        return;
    }

    // Move once right away
    moveImageOnce();

    // Move over and over again
    moveIntervalId = setInterval(moveImageOnce, MOVE_INTERVAL_MS);

    messageBox.innerHTML = "The meme is now moving!";
}



// This actually stops the movement
function stopMoving() {

    // If there's no interval, nothing to stop
    if (moveIntervalId === null) {
        messageBox.innerHTML = "The meme isn't moving right now.";
        return;
    }

    // Stop the moving loop
    clearInterval(moveIntervalId);
    moveIntervalId = null;

    messageBox.innerHTML = "The meme stopped moving.";
}



// This disables Start, then starts movement
function disableStartButton() {
    startBtn.disabled = true;
    startMoving();
}

// This turns the Start button back on
function enableStartButton() {
    startBtn.disabled = false;
    messageBox.innerHTML = "Start is ready to go again.";
}



// This disables Stop, then stops the meme
function disableStopButton() {
    stopBtn.disabled = true;
    stopMoving();
}

// This turns the Stop button back on
function enableStopButton() {
    stopBtn.disabled = false;
    messageBox.innerHTML = "Stop is ready whenever.";
}



// This runs when Start is clicked
function handleStartClick() {
    disableStartButton();
    enableStopButton();
}



// This runs when Stop is clicked
function handleStopClick() {
    disableStopButton();
    enableStartButton();
}



// Runs right away when the page loads
(function initUI() {

    // Start should be available, stop should not
    startBtn.disabled = false;
    stopBtn.disabled = true;

    // Start position so the meme isn't in a weird place
    memeImg.style.left = "20px";
    memeImg.style.top = "120px";

    // First message the user sees
    messageBox.innerHTML = "Click Start to make the meme move!";
})();
