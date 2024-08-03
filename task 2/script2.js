let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    let feedback = '';

    if (userGuess === randomNumber) {
        feedback = Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.;
    } else if (userGuess < randomNumber) {
        feedback = 'Your guess is too low. Try again!';
    } else {
        feedback = 'Your guess is too high. Try again!';
    }

    document.getElementById('feedback').innerText = feedback;
    document.getElementById('attempts').innerText = Attempts: ${attempts};
});