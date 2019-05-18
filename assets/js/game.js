console.log("scripts loaded")
var numberGuess = Math.floor(Math.random() * 101) + 19
console.log(numberGuess)
var winsCounter = 0
var lossesCounter = 0
var sum = 0
var gemImg = ["./assets/green gem.jpg", "./assets/purple gem.jpg", "./assets/yellow.jpg", "./assets/red gem.jpg"]





// init the variables
// calculate a random number for every stone
var stonesValues = []
// 
function initializeGame() {
    $("#targetNumber").html(numberGuess)
    $("#wins").html(winsCounter)
    $("#losses").html(lossesCounter)
    $("#summary").html(sum)
    //these selectors allow to displayo on the html
    //converted to jquery
    //document.getElementById("number").innerHTML=numberGuess;
    //document.getElementById("wins").innerHTML=winsCounter;
    //document.getElementById("losses").innerHTML=lossesCounter;
    //document.getElementById("sum").innerHTML=sum;
    //i++ is the same as i=i+1 
    for (var i = 0; i < gemImg.length; i++) {
        // use attr to assign attributes values 
        // $(".gem").attr("data-random",Math.floor(Math.random() * 11)+1)
        stonesValues[i] = Math.floor(Math.random() * 11) + 1
        //if you open with a double quote, use a single quote for a string inside
        var imageCrystal = $("<img src='" + gemImg[i] + "' class='gem' data-randomNumber='" + stonesValues[i] + "' />");
        $(".imgPlaceholder").append(imageCrystal)    // data- attribute-to store data, (create name)= call the name of the array 
    }
}
// call function
initializeGame()


// the game is inside the onclick
//.gem creates an on click event for each image 
$(".gem").on("click", function (event) {

    //(this) calls current object or windows object/shorthand.
    console.log($(this).attr("data-randomNumber"))
    
    sum = sum + parseInt($(this).attr("data-randomNumber"))
    $("#summary").html(sum)

    //if player gets number guess to match with given number then they win
    if (numberGuess === sum) {
        winsCounter++

        //clear board
        $("#summary").html("0")

        $("#wins").html(winsCounter)

        numberGuess = Math.floor(Math.random() * 101) + 19;
        $("#targetNumber").html(numberGuess)
        for (var i = 0; i < gemImg.length; i++) {
            stonesValues[i] = Math.floor(Math.random() * 11) + 1;
        }
        //reset sum
        sum=0;
        alert("you win!");
    }
    // if players numbers go beyond target number then alert that they lose
     if  (sum > numberGuess) {
        lossesCounter++

        //clear board
        $("#summary").html("0")

        $("#losses").html(lossesCounter)

        numberGuess = Math.floor(Math.random() * 101) + 19;
        $("#targetNumber").html(numberGuess)
        for (var i = 0; i < gemImg.length; i++) {
            stonesValues[i] = Math.floor(Math.random() * 11) + 1;
        }
        //reset sum
        sum=0;
        alert("you lose!");

    }



})

//random other notes
//  index get the id of the stone that was clicked
    // get the value in the stoneValues[index]
    //parseInt converts string number to numeric