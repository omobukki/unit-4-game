$(document).ready(function () {
    console.log("DOM fully loaded and parsed");
    
    let blue;
    let red;
    let green;
    let yellow;
    let computerNum;
    let yourTotalScore;
    //let yourWins = 0;
    //let yourlosses = 0;
    let wins=0;
    let losses=0;
    const generateCrystalNum = function () {
        let random = Math.floor(Math.random() * 12);
        return random;

    }
    
    const generateRandomNum = function () {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum = random;
        return random;
    }

    const init = function () {
//         wins = $("#win");        
//         losses = $("#loss");
        $("#win").html(wins);
        $("#loss").html(losses);

        blue = generateCrystalNum();
        red = generateCrystalNum();
        green = generateCrystalNum();
        yellow = generateCrystalNum();
        computerNum = 0;
        console.log("init", blue);
        $("#randomNum").html(generateRandomNum());
        yourTotalScore = 0;
        $("#score").html(yourTotalScore);
    }    
    
    init ();



    const winOrLose = function () {
        if (yourTotalScore === computerNum) {
            wins += 1;
            alert("you win!");
            init ();
        } else if (yourTotalScore > computerNum) {
            losses += 1;
            alert("You're a loser!");
            init ();
        }

    }




    $("button").on("click", function () {
        console.log("click");
        if (this.id === "blue") {
            yourTotalScore += blue;
        } else if (this.id === "yellow") {
            yourTotalScore += yellow;
        } else if (this.id === "red") {
            yourTotalScore += red;
        } else if (this.id === "green") {
            yourTotalScore += green;
        }
        winOrLose();
        $("#score").html(yourTotalScore);


    });

});



