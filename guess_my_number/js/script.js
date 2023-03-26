// Generating a random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Making score and highscore dynamic
document.querySelector('.score').textContent = score;
document.querySelector('.h-score').textContent = highScore;


document.querySelector('.check').addEventListener('click', function () {
    // Taking the number from the input and converting it to number se we can compare it with the secretNumber
    const guess = Number(document.querySelector('.guess').value);

    // When user clicks on check button without giving an input
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No number!';

        // When user guesses the right number    
    } else if (guess === secretNumber) {
        //Changing the html content
        document.querySelector('.message').textContent = '🙌 Correct!';
        document.querySelector('.number').textContent = secretNumber;

        //Changing the css styling
        document.querySelector('.wrapper').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = "25rem";
        document.querySelector('.check').style.display = "none";
        document.querySelector('.again').style.display = "block";

        if (score > highScore) {
            document.querySelector('.h-score').textContent = score;
        }
        // When user tries a higher number
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '👆 Too high!';
        score--;
        document.querySelector('.score').textContent = score;

        // When user tries a lower number    
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '👇 Too low';
        score--;
        document.querySelector('.score').textContent = score;
    }
})


// Restarting the game after clicking again button
document.querySelector('.again').addEventListener('click', function () {
    // Restarting score and the random number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Changing the html content
    document.querySelector('.message').textContent = 'Guess here ↙';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //Changing the css styling
    document.querySelector('.wrapper').style.backgroundColor = 'rgba(85, 85, 85, 0.5)';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.again').style.display = 'none';
    document.querySelector('.check').style.display = 'block';
});