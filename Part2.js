/****************************
Rental Josh 16/05/25
****************************/
console.log("Welcome to the part 2 project");
var timer = 0;
var PokerTimer = 0;
var herotimer = 0;
var hero1 = 0;
var hero2 = 0;
var hero3 =0;
var heropack1 = 0;
let heropack1open = ["hero1pack1", "hero2pack1", "hero3pack1", "hero4pack1", "hero5pack1"]
var heropack2 = 0;
let heropack2open = ["hero1pack2", "hero2pack2", "hero3pack2", "hero4pack3", "hero5pack2"]
var heropack3 = 0;
let heropack3open = ["hero1pack3", "hero2pack3", "hero3pack3", "hero4pack3", "hero5pack3"]
var heropack4 = 0;
let heropack4open = ["hero1pack4", "hero2pack4", "hero3pack4", "hero4pack4", "hero5pack4"]
var Cash = 0;
var truechecking = 0;

/****************************
 Main code
****************************/
function start() {
Cash = Cash + 1;
console.log(Cash);
}

//timerintervals
let intervalID = setInterval(() => {
  if (truechecking == 1) {
    timeRenting();
  }
}, 1000);
/****************************
 Functions
****************************/
function timeRenting() {
    if (truechecking == 1 && PokerTimer == 1) {
        intervalID = 0;
        timer = timer + 1
        console.log(timer,"second")
    }
if (timer >= 30) {
    truechecking = 0;
    PokerTimer = 0;
    timer = 0
    console.log("30 seconds passed. Rental ended.");
    Cash = Cash + 25
  }
}
function poker() {
    if (PokerTimer >= 2) {
        truechecking = 0;
        PokerTimer = 0;
        console.log("you can only rent one item at a time")
        timer = 0;
    }
    if (Cash >= 20 && PokerTimer <= 1) {
        intervalID = 0;
        truechecking = truechecking + 1
    PokerTimer = PokerTimer + 1
    Cash = Cash - 20
    console.log("thank you for your purchase you may buy again after 30 seconds")
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
    
}