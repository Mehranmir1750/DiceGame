

var number = Math.floor(Math.random()*6)+1;
var diceImage = "dice"+number+".png";
var randomImageSource = "images/" + diceImage;

var number2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice"+number2+".png";
var randomImageSource2 = "images/" + diceImage2;

console.log(number);
console.log(number2)

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (number> number2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}
else if (number2> number){
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
