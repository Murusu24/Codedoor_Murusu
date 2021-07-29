
const diceImg1 = document.getElementById("diceImg1");
const diceImg2 = document.getElementById("diceImg2");

function rollDice (){

    var random1 = Math.floor(Math.random()*6) + 1;
    var random2 = Math.floor(Math.random()*6) + 1;

    diceImg1.innerHTML = random1;
    diceImg2.innerHTML = random2;

        switch(random1) {
            case 1: diceImg1.src="diceGame\\img\\dice1.png";
                break;
            case 2: diceImg1.src="diceGame\\img\\dice2.png";
                break;
            case 3:diceImg1.src="diceGame\\img\\dice3.png";
                break;
            case 4: diceImg1.src="diceGame\\img\\dice4.png"; 
                break;
            case 5: diceImg1.src="diceGame\\img\\dice5.png";
                break;
            case 6: diceImg1.src="diceGame\\img\\dice6.png";
                break;
            default: console.log("Dice has max only 6");
        }
    

        switch(random2) {
            case 1: diceImg2.src="diceGame\\img\\dice1.png";
                break;
            case 2: diceImg2.src="diceGame\\img\\dice2.png";
                break;
            case 3:diceImg2.src="diceGame\\img\\dice3.png";
                break;
             case 4: diceImg2.src="diceGame\\img\\dice4.png"; 
                break;
            case 5: diceImg2.src="diceGame\\img\\dice5.png";
                break;
            case 6: diceImg2.src="diceGame\\img\\dice6.png";
                break;
            default: console.log("Dice has max only 6");
        } 

     const winnerStatement = document.getElementById("winner");
        if (random1 > random2)  {
        winnerStatement.innerHTML = "Winner is: Player 1"
        }
        else if (random1 < random2){
            winnerStatement.innerHTML = "Winner is: Player 2";
        }
        else{
            winnerStatement.innerHTML = "It's a Draw";
        }

}
