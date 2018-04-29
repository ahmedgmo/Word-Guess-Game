var capitalCities = [
    'Copenhagen',
    'Rome',
    'Reykjavik',
    'Paris',
    'Berlin',
    'London',
    'Edinburgh',
    'Moscow',
    'Cairo',
    'Accra',
    'Pretoria',
    'Tunis',
    'Kinshasa',
    'Brasilia',
    'Caracas',
    'Montevideo',
    'Bogota',
    'Managua',
    'Doha',
    'Beijing',
    'Tokyo',
    'Manila',
    'Islamabad',
    'Canberra',
    'Wellington',
    'Tarawa',
    'Apia',
    'Suva',
]

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var gameStart = false;
var randomCity = '';
var randomCityUnderscore = [];
var totalGuesses = [];
var wrongGuesses = [];

function startGame() {
    gameStart = true;
    remainingGuesses = 10;
    totalGuesses = [];
    wrongGuesses = [];
    randomCityUnderscore = [];

    randomCity = capitalCities[Math.floor(Math.random() * capitalCities.length)];
    console.log(randomCity);

    for (var i = 0; i < randomCity.length; i++) {
        randomCityUnderscore.push('_');
    }

    document.getElementById('remainingLives').textContent = remainingGuesses;
    document.getElementById('underscored').textContent = randomCityUnderscore.join(' ');
    document.getElementById('lettersGuessed').textContent = wrongGuesses;

}

function continueGame(input) {
    if (gameStart === true && wrongGuesses.indexOf(input) === -1) {
        for (var i = 0; i < randomCity.length; i++) {
            if (randomCity[i].toLowerCase() === input.toLowerCase()) {
                randomCityUnderscore[i] = randomCity[i];
            }
        }
        document.getElementById('underscored').textContent = randomCityUnderscore.join(' ');
        badGuess(input);

    } else {
        if (gameStart === false) {
            alert("Click Start Game button to start");
        } else {
            alert("You already tried this guess. Try another letter");
        }
    }
}

function badGuess(input) {
    if (randomCityUnderscore.indexOf(input.toLowerCase()) === -1 && randomCityUnderscore.indexOf(input.toUpperCase()) === -1) {
        remainingGuesses--;
        wrongGuesses.push(input);
        document.getElementById('lettersGuessed').textContent = wrongGuesses.join(' ');
        document.getElementById('remainingLives').textContent = remainingGuesses;

    }
}




document.getElementById('startGameBtn').addEventListener('click', startGame);

document.onkeyup = function (event) {
    continueGame(event.key);
}