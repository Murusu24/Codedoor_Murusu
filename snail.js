let day = 1;
let currentStep = 0;
console.log("Snail prepares to trip, packs the laguage (^_^)\n->->->->->->->->-__( )^^__->->->->->->->->->->->->->->")

while (currentStep <= 32){
    // day and snail goes up
    currentStep+=7
    console.log("Snail climbes up:\n DAY " + "<-" + day + "->" + " STEP: " + "<-" + currentStep + "->")

    // break the loop before the nights starts

    if(currentStep>=32){
        break;
    }
    // night and snail goes down
    currentStep-=2
    
    console.log("Snail sleeps and falls: \n DAY " + "<-" + day + "->" + " STEP: " + "<-" + currentStep + "->")
    day++
}

// 0, 7d, 5n, 12d, 10n, 17d, 15n, 22d, 20n, 27d, 25n, 32d, break, 30n, 37d, 35n