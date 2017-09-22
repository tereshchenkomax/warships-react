/**
 * Created by jesus on 15.12.2016.
 */
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
     var cell = document.getElementById(location);
         cell.setAttribute("class","hit");
     },
    displayMiss: function(location){
        var cell = document.getElementById(location);
        cell.setAttribute("class","miss");
    },
}
var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: ["06","16","26"], hits: ["","",""]},
            { locations: ["24","34","44"], hits: ["","",""]},
            { locations: ["10","11","12"], hits: ["","",""]}],

    fire: function (guess) {
        for (var i=0; i < this.numShips; i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess); // Выбор из массива указанного значения

            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("СУКА БЛЯТЬ ПОПАЛА!!!");

                if (this.isSunk(ship)){
                    view.displayMessage("СУКА БЛЯТЬ ПОТОПИЛА МНЕ КОРАБЭЛЬ!");
                    this.shipsSunk++
                }
                return true;
                // Есть попадание
            }
        }
        view.displayMiss(guess);
        view.displayMessage("ТЫ АХУЕЛА ПРОМАХИВАТЬСЯ ГНИДА БЛЯТЬ??????");
        return false;
    },
    isSunk: function(ship){
        for ( var i = 0; i < this.shipLength;i++){
            if (ship.hits[i] !== "hit") {
                return false;
            }
        return true;
        }
    }
};
var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("ВСЕ ЗАТОПИЛА ГНИДА ТЫ БЛЯДСКАЯ ЗА "+this.guesses+"ПОПЫТОК");
            }
        }
    }
}
function parseGuess(guess) {
    var alphabet = ["A","B","C","D","E","F","G"];
    if (guess === null || guess.length !==2) {
        alert("ПАШОЛ НАХОЙ!")}
    else{
        firstChar = guess.charAt(0);
        upperFirstChar = firstChar.toUpperCase();
        var row = alphabet.indexOf(upperFirstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)){
            alert("ДА ТЫ ВАЩЕ ЧТОЛЕ АХУЕЛЛА?")
        }
        else if (row < 0 || row >= model.boardSize ||
            column < 0 || column >= model.boardSize){
            alert("ВВОДИ БЛЯТЬ ПРАВИЛЬНЫЕ СИМВОЛЫ ТЫ ЧТО ТУПОЙ ЧТОЛЕ БЛЯТЬ?");
        }
        else {
            return row + column;
        }
    }
    return null;
}
function init(){
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
}
function handleFireButton () {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}
function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    e = e || window.event;
    if (e.keyCode === 13){
        fireButton.click();
        return false;
    }

}
window.onload = init();
/*
 controller.processGuess("A0");
 controller.processGuess("A6");
 controller.processGuess("B6");
 controller.processGuess("C6");
 controller.processGuess("C4");
 controller.processGuess("D4");
 controller.processGuess("E4");
 controller.processGuess("B0");
 controller.processGuess("B1");
 controller.processGuess("B2");
console.log(parseGuess("A0"));
console.log(parseGuess("A7"));
model.fire("56");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("31");
model.fire("44");
model.fire("13");
model.fire("11");
model.fire("10");
*/
