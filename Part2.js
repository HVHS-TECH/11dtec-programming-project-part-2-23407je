/****************************
Rental Josh 16/05/25
****************************/
console.log("Welcome to the part 2 project");
var timer1 = 0;
var timer2 = 0;
var PokerTimer = 0;
var herotimer = 0;
var hero1 = 0;
var hero2 = 0;
var hero3 = 0;
var hero1pack1 = 0;
var hero2pack1 = 0;
var hero3pack1 = 0;
var hero4pack1 = 0;
var hero5pack1 = 0;
var hero1pack2 = 0;
var hero2pack2 = 0;
var hero3pack2 = 0;
var hero4pack2 = 0;
var hero5pack2 = 0;
var hero1pack3 = 0;
var hero2pack3 = 0;
var hero3pack3 = 0;
var hero4pack3 = 0;
var hero5pack3 = 0;
var hero1pack4 = 0;
var hero2pack4 = 0;
var hero3pack4 = 0;
var hero4pack4 = 0;
var hero5pack4 = 0;
var hero1pack5 = 0;
var hero2pack5 = 0;
var hero3pack5 = 0;
var hero4pack5 = 0;
var hero5pack5 = 0;
var Cash = 0;
var truechecking = 0;

/****************************
 Main code
****************************/
function start() {
Cash = Cash + 9999;
console.log(Cash);
}

//timerintervals
let intervalID = setInterval(() => {
  if (truechecking == 1 || herotimer == 1) {
    timeRenting();
  }
}, 1000);
/****************************
 Functions
****************************/
function timeRenting() {
    if (truechecking == 1 && PokerTimer == 1) {
        timer1 = timer1 + 1
        console.log(timer1,"second")
    }
if (timer1 >= 30) {
    truechecking = 0;
    PokerTimer = 0;
    timer1 = 0
    console.log("30 seconds passed. Rental ended.");
    Cash = Cash + 25
  }
  if (herotimer >= 1) {
        timer2 = timer2 + 1
        console.log("test seconds", timer2);
    }
if (timer2 >= 84400) {
    herotimer = 0;
    timer2 = 0
    console.log("1 day passed. Rental ended.");
  }
}
function poker() {
    if (PokerTimer >= 2) {
        truechecking = 0;
        PokerTimer = 0;
        console.log("you can only rent one item at a time")
        timer1 = 0;
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
function heropack1function() {
    if (herotimer >= 2) {
        herotimer = 0;
        console.log("you can only rent one of this hero at a time")
        timer2 = 0;
    }
    if (Cash >= 500 && herotimer <= 1) {
        intervalID = 0;
    herotimer = herotimer + 1
    Cash = Cash - 500
    console.log("you have bought hero pack 1")
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
}