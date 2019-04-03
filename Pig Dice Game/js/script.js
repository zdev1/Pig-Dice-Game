/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var getRandomNumber = function () {
    "use strict";
    var random = Math.random();
    random = Math.floor(random * 6);
    random = random + 1;
    return random;
};

var changePlayer = function () {
    "use strict";
    if ($("current").innerHTML === $("player1").value){
        $("current").innerHTML = $("player2").value;
    } else {
        $("current").innerHTML = $("player1").value;
    }
    $("die").value = "0";
    $("total").value = "0";
    $("roll").focus();
};

var newGame = function () {
    "use strict";
    $("score1").value = "0";
    $("score2").value = "0";
    
    if ($("player1").value === "" || $("player2").value === "") {
        $("turn").removeAttribute("class");
        window.alert("PLease enter two player names to begin.");
    } else {
        $("turn").setAttribute("class", "open");
        changePlayer();
    }
}

var roll = function () {
    "use strict";
    var total, die;
    total = parseInt($("total").value, 10);
    die = getRandomNumber();
    if (die === 1) {
        total = 0;
        changePlayer();
    } else {
        total = total + die;
    }
    $("die").value = die;
    $("total").value = total;
};

var holdTurn = function () {
    "use strict";
    var score, total;
    total = parseInt($("total".value, 10);
    if ($("current").innerHTML === $("player1").value){
        score = $("score1"),
    } else{
        score = $("score2");
    }
        
       score.value = parseInt(score.value, 10) + total;
       if (score >= 100) {
           window.alert($("current").innerHTML + " wins!");
           newGame();
       }
    };

window.addEventListener("load", function () {
    "use strict";
    $("new_game").addEventListener("click", newGame);
    $("roll").addEventListener("click", rollDie);
    $("hold").addEventListener("click", holdTurn);
})