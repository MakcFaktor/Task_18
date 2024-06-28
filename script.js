let countdown;
let timeLeft = 85;

function startTimer() {
    const timerDisplay = document.getElementById('timer');

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(countdown);
        }

        timeLeft--;
    }

    updateDisplay();

    countdown = setInterval(updateDisplay, 1000);
}

document.getElementById('startTimer').addEventListener('click', startTimer);
