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
var correctGuesses = [];
var wrongGuesses = [];

function startGame() {
    gameStart = true;
    remainingGuesses = 10;
    correctGuesses = [];
    wrongGuesses = [];
    randomCityUnderscore = [];

    randomCity = capitalCities[Math.floor(Math.random() * capitalCities.length)];

    for (var i = 0; i < randomCity.length; i++) {
        randomCityUnderscore.push('_');
    }

    document.getElementById('remainingLives').textContent = remainingGuesses;
    document.getElementById('underscored').textContent = randomCityUnderscore.join(' ');
    document.getElementById('lettersGuessed').textContent = wrongGuesses;

}










document.getElementById('startGameBtn').addEventListener('click', startGame);
