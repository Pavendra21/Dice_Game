// var randomnumber1 = Math.random();
// randomnumber1 = randomnumber1 * 6;
// randomnumber1 = Math.floor(randomnumber1 + 1)

// var randomdiceimage = ("images/dice" + randomnumber1 + ".png");


// var image1 = document.querySelector(".img1");

// image1.setAttribute("src", randomdiceimage);

// // -----------------------------------------------------------------------------------

// var randomnumber2 = Math.random();
// randomnumber2 = randomnumber2 * 6;
// randomnumber2 = Math.floor(randomnumber2 + 1)

// var randomdiceimage = ("images/dice" + randomnumber2 + ".png");

// var image1 = document.querySelector(".img2");

// image1.setAttribute("src", randomdiceimage);

// // --------------------------------------------------------------------------------------------


// if (randomnumber1 > randomnumber2) {

//     document.querySelector("h1").innerHTML = "Player 1 wins !";

// }

// else if (randomnumber2 > randomnumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 wins !";


// }

// else {

//     document.querySelector("h1").innerHTML = "Its Draw !";

// }




document.getElementById('loadJS').addEventListener('click', function() {
    myFunction();
});

function myFunction() {
    var randomnumber1 = Math.random();
    randomnumber1 = randomnumber1 * 6;
    randomnumber1 = Math.floor(randomnumber1 + 1)

    var randomdiceimage = ("images/dice" + randomnumber1 + ".png");

    var image1 = document.querySelector(".img1");

    image1.setAttribute("src", randomdiceimage);

    // -----------------------------------------------------------------------------------

    var randomnumber2 = Math.random();
    randomnumber2 = randomnumber2 * 6;
    randomnumber2 = Math.floor(randomnumber2 + 1)

    var randomdiceimage = ("images/dice" + randomnumber2 + ".png");

    var image1 = document.querySelector(".img2");

    image1.setAttribute("src", randomdiceimage);

    // --------------------------------------------------------------------------------------------

    if (randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins !";
    }
    else if (randomnumber2 > randomnumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins !";
    }
    else {
        document.querySelector("h1").innerHTML = "Its Draw !";
    }
}

