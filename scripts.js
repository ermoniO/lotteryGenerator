// function generateRandomNumbers() {
//     var numberOne = Math.floor((Math.random() * 69) + 1);
//     document.getElementById("n1").innerText = numberOne;

//     var numberTwo = Math.floor((Math.random() * 69) + 1);
//     document.getElementById("n2").innerText = numberTwo;

//     var numberThree = Math.floor((Math.random() * 69) + 1);
//     document.getElementById("n3").innerText = numberThree;

//     var numberFour = Math.floor((Math.random() * 69) + 1);
//     document.getElementById("n4").innerText = numberFour;

//     var numberFive = Math.floor((Math.random() * 69) + 1);
//     document.getElementById("n5").innerText = numberFive;

//     var powerBall = Math.floor((Math.random() * 26) + 1);
//     document.getElementById("powerBall").innerText = powerBall;
// }

function generateRandomNumbers() {
    const luckyNumbers = [];
    for (var i = 0; i < 5; i++) {
        luckyNumbers[i] = Math.floor((Math.random() * 69) + 1);
    }
    luckyNumbers.sort(function(a, b){return a - b});

    document.getElementById("n1").innerHTML = luckyNumbers[0];
    document.getElementById("n2").innerHTML = luckyNumbers[1];
    document.getElementById("n3").innerHTML = luckyNumbers[2];
    document.getElementById("n4").innerHTML = luckyNumbers[3];
    document.getElementById("n5").innerHTML = luckyNumbers[4];

    var powerBall = Math.floor((Math.random() * 26) + 1);
    document.getElementById("powerBall").innerText = powerBall;
}