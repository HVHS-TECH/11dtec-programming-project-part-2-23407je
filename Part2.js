/****************************
Rental Josh 16/05/25
****************************/
console.log("Welcome to the part 2 project");
var timer1 = 0;
var timer2 = 0;
var timer3 = 0;
var timer4 = 0;
var PokerTimer = 0;
var herotimer = 0;
var heropacktimer2 = 0;
var heropacktimer3 = 0;
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
var Cash = 0;
var truechecking = 0;
var spinfunction = 0;
var spinfunction2 = 0;
var spinfunction3 = 0;
var hero1battletimer = 0;
var rewardhero1 = 0;
var hero2battletimer = 0;
var rewardhero2 = 0;
var hero3battletimer = 0;
var hero3ability = 0;
var hero1abilitychecker = 0;
var hero4battletimer = 0;
var rewardhero4 = 0;
var hero5battletimer = 0;
var rewardhero5 = 0;
/****************************
 Main code
****************************/
function start() {
Cash = Cash + 9999999;
console.log(Cash);
money.innerHTML = "$" + Cash;
}


//timerintervals
let intervalID = setInterval(() => {
  if (truechecking == 1 || herotimer == 1 || heropacktimer2 == 1 || heropacktimer3 == 1 || hero1pack1 == 1 || hero2pack1 == 1 || hero3pack1 == 1) {
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
    money.innerHTML = "$" + Cash;
  }
if (hero1pack1 == 1) {
  hero1battletimer = hero1battletimer + 1
}
if (hero1battletimer >= 300) {
  rewardhero1 = Math.random()
  rewardhero1 = rewardhero1 * 100
  if (hero3ability == 1 && hero1abilitychecker == 1) {
    rewardhero1 = rewardhero1 * 1.1
    hero1abilitychecker = 0
  }
  if (rewardhero1 >= 50) {
    Cash = Cash + 200
     money.innerHTML = "$" + Cash;
  }
hero1battletimer = 0
}
if (hero2pack1 == 1) {
  hero2battletimer = hero2battletimer + 1
}
if (hero2battletimer >= 300) {
  rewardhero2 = Math.random()
  rewardhero2 = rewardhero2 * 100
  if (rewardhero2 <= 40 && rewardhero2 > 10) {
    Cash = Cash + 150
     money.innerHTML = "$" + Cash;
  }
  if (rewardhero2 <= 10) {
   Cash = Cash + 300
    money.innerHTML = "$" + Cash;
  }
hero2battletimer = 0
}
if (hero3pack1 == 1) {
  hero3battletimer = hero3battletimer + 1
}
if (hero3battletimer >= 900) {
hero3ability = 1
hero3battletimer = 0
hero1abilitychecker = 1
}
if (hero4pack1 == 1) {
  hero4battletimer = hero4battletimer + 1
}
if (hero4battletimer >= 900) {
Cash = Cash + 1500
}
if (hero5pack1 == 1) {
  hero5battletimer = hero5battletimer + 1
}
if (hero5battletimer >= 300) {
  rewardhero5 = Math.random()
  rewardhero5 = rewardhero5 * 100
  if (rewardhero5 <= 10) {
    Cash = Cash + 2000
     money.innerHTML = "$" + Cash;
  }
hero1battletimer = 0
     if (herotimer >= 1) {
        timer2 = timer2 + 1
        console.log("test seconds", timer2);
    }
if (timer2 >= 1) {
    herotimer = 0;
    timer2 = 0
    console.log("1 day passed. Rental ended.");
    console.log("Badge collected: Grassless life")
    spinfunction = spinfunction * 100

    if (spinfunction <= 1) {
        hero5pack1 = 1
        spinfunction = 0
         console.log("You got the 1% chance hero Hero 5 CONGRATULATIONS");
document.getElementById("CupcakeGirl").innerHTML = `
<div id="Hero" style="display;">
  <img src="CupcakeGirl.png" width="200" alt="CupcakeGirl">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown5()">Information</button>
    <div id="myDropdown5" class="dropdown-content">
      <p>Baits villains with her cupcakes but doesn't work often -- 10% chance of beating a high hero every 5 minutes ---- CHANCES TO GET THE HERO: 1% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction > 1 && spinfunction <= 6) {
        hero4pack1 = 1
        spinfunction = 0
         console.log("You got the 5% chance Hero 4");
document.getElementById("PhantomStranger").innerHTML = `
<div id="Hero" style="display;">
  <img src="PhantomStranger.png" width="200" alt="PhantomStranger">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown4()">Information</button>
    <div id="myDropdown4" class="dropdown-content">
      <p>Kills a mid tiered enemy every 15 minutes ---- CHANCES TO GET THE HERO: 5% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction > 6 && spinfunction <= 16) {
        hero3pack1 = 1
        spinfunction = 0
         console.log("You got the 10% chance Hero 3");
document.getElementById("TheSpectre").innerHTML = `
<div id="Hero" style="display;">
  <img src="TheSpectre.png" width="200" alt="TheSpectre">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown3()">Information</button>
    <div id="myDropdown3" class="dropdown-content">
      <p>boosts certain cards win chances with its reality changing ability ---- CHANCES TO GET THE HERO: 14% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
  if (spinfunction > 16 && spinfunction <= 40) {
        hero2pack1 = 1
        spinfunction = 0
         console.log("You got the 24% chance Hero 2");
document.getElementById("Wolverine").innerHTML = `
<div id="Hero" style="display;">
  <img src="Wolverine.png" width="200" alt="Wolverine">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown2()">Information</button>
    <div id="myDropdown2" class="dropdown-content">
      <p>Fights for you and has a 40% win chance for low leveled enemys. Also has a 10% chance of defeating a middle tiered enemy ---- CHANCES TO GET THE HERO: 24% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
    if (spinfunction > 40) {
    hero1pack1 = 1
    spinfunction = 0;
    console.log("You got the 60% chance Hero 1");

    document.getElementById("Robin").innerHTML = `
<div id="Hero" style="display;">
  <img src="Robin.png" width="200" alt="Robin">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown()">Information</button>
    <div id="myDropdown" class="dropdown-content">
      <p>Robin gives a +5% win boost and wins 50% of the time against low level villains ---- CHANCES TO GET THE HERO: 60% CHANCE</p>
    </div>
  </div>
</div>
    `;
}
}
    if (heropacktimer2 >= 1) {
        timer3 = timer3 + 1
        console.log("pack 2", timer3);
    }
    if (timer3 >= 10) {
    heropacktimer2 = 0;
    timer3 = 0
    console.log("1 day passed. Rental ended.");
    console.log("Badge collected: Grassless life")
    spinfunction2 = spinfunction2 * 100
    if (spinfunction2 <= 1) {
        hero5pack2 = hero5pack2 + 1
        spinfunction2 = 0
         console.log("You got the 1% chance Hero 5 pack 2 CONGRATULATIONS");
document.getElementById("EDP456").innerHTML = `
<div id="Hero" style="display;">
  <img src="EDP456.png" width="200" alt="EDP456">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown10()">Information</button>
    <div id="myDropdown10" class="dropdown-content">
      <p>distracts multiple enemies at once defeating some passively with his love for cupcakes but although he wins everytime he also loses almost everytime making his cooldown long  -- 15 minute cooldown ---- CHANCES TO GET THE HERO: 1% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction2 > 1 && spinfunction2 <= 6) {
        hero4pack2 = hero4pack2 + 1
        spinfunction2 = 0
         console.log("You got the 5% chance Hero 4 pack 2");
document.getElementById("DrStrange").innerHTML = `
<div id="Hero" style="display;">
  <img src="DrStrange.png" width="200" alt="DrStrange">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown9()">Information</button>
    <div id="myDropdown9" class="dropdown-content">
      <p>every few minutes he recharges an ability allowing him to warp time and make time faster ---- CHANCES TO GET THE HERO: 5% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction2 > 6 && spinfunction2 <= 16) {
        hero3pack2 = hero3pack2 + 1
        spinfunction2 = 0
         console.log("You got the 10% chance Hero 3 Pack 2");
document.getElementById("DrFate").innerHTML = `
<div id="Hero" style="display;">
  <img src="DrFate.png" width="200" alt="DrFate">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown8()">Information</button>
    <div id="myDropdown8" class="dropdown-content">
      <p>Teleports villains middle tiered or higher to your best heroes battlefield every 5 minutes ---- CHANCES TO GET THE HERO: 14% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
  if (spinfunction2 > 16 && spinfunction2 <= 40) {
        hero2pack2 = hero2pack2 + 1
        spinfunction2 = 0
         console.log("You got the 24% chance Hero 2 pack 2");
document.getElementById("Sentry").innerHTML = `
<div id="Hero" style="display;">
  <img src="Sentry.png" width="200" alt="Sentry">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown7()">Information</button>
    <div id="myDropdown7" class="dropdown-content">
      <p>70% chance to beat a middle tiered villain and a 30% chance for a high tiered villain ---- CHANCES TO GET THE HERO: 24% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction2 > 40) {
        hero1pack2 = hero1pack2 + 1
        spinfunction2 = 0
        console.log("You got the 60% chance Hero 1 pack 2");
document.getElementById("Cyborg").innerHTML = `
<div id="Hero" style="display;">
  <img src="Cyborg.png" width="200" alt="Cyborg">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown6()">Information</button>
    <div id="myDropdown6" class="dropdown-content">
      <p>beats middle tiered villains ---- CHANCES TO GET THE HERO: 60% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
}
 if (heropacktimer3 >= 1) {
        timer4 = timer4 + 1
        console.log("hero second", timer4);
    }
    if (timer4 >= 10) {
    heropacktimer3 = 0;
    timer4 = 0
    console.log("1 day passed. Rental ended.");
    console.log("Badge collected: Grassless life")
    spinfunction3 = spinfunction3 * 100
    if (spinfunction3 <= 0.5) {
        hero5pack3 = hero5pack3 + 1
        spinfunction3 = 0
         console.log("You got the 0.5% chance Hero 5 pack 3 CONGRATULATIONS");
document.getElementById("JFK").innerHTML = `
<div id="Hero" style="display;">
  <img src="JFK.png" width="200" alt="JFk">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown15()">Information</button>
    <div id="myDropdown15" class="dropdown-content">
      <p>HIS LEADERSHIP SHINES THROUGH GIVING EVERYONE A 100% WIN RATE FOR 1 MINUTE EVERY 2 MINUTES AND ALSO 50K EVERY 90 SECONDS ---- CHANCES TO GET THE HERO: 0.5% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction3 > 0.5 && spinfunction3 <= 6.5) {
        hero4pack3 = hero4pack3 + 1
        spinfunction3 = 0
         console.log("You got the 5% chance Hero 4 pack 3");
document.getElementById("LeeHarvey").innerHTML = `
<div id="Hero" style="display;">
  <img src="LeeHarvey.png" width="200" alt="LeeHarvey">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown14()">Information</button>
    <div id="myDropdown14" class="dropdown-content">
      <p>Never misses his snipe -- 100% chance of beating a high tiered villain ---- CHANCES TO GET THE HERO: 5% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction3 > 6.5 && spinfunction3 <= 16) {
        hero3pack3 = hero3pack3 + 1
        spinfunction3 = 0
         console.log("You got the 9.5% chance Hero 3 Pack 3");
 document.getElementById("BatMan").innerHTML = `
<div id="Hero" style="display;">
  <img src="BatMan.png" width="200" alt="BatMan">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown13()">Information</button>
    <div id="myDropdown13" class="dropdown-content">
      <p>Swinging through the depths of the city of Gotham he beats crimes at speed like no other with a 30 second fight. His win rates are.... 10% Low tiered, 40% middle tiered, 30% high tiered, 10% BOSS TIERED ---- CHANCES TO GET THE HERO: 9.5% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
  if (spinfunction3 > 16 && spinfunction3 <= 31) {
        hero2pack3 = hero2pack3 + 1
        spinfunction3 = 0
         console.log("You got the 15% chance Hero 2 pack 3");
document.getElementById("Coby").innerHTML = `
<div id="Hero" style="display;">
  <img src="Coby.png" width="200" alt="Coby">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown12()">Information</button>
    <div id="myDropdown12" class="dropdown-content">
      <p>gives mashed potatoes in the team BOOSTS WIN RATE BY 50% EVERY 10 MINUTES  ---- CHANCES TO GET THE HERO: 15% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
      if (spinfunction3 > 31) {
        hero1pack3 = hero1pack3 + 1
        spinfunction3 = 0
        console.log("You got the 69% chance Hero 1 pack 3");
document.getElementById("Jahlayze").innerHTML = `
<div id="Hero" style="display;">
  <img src="Jahlayze.png" width="200" alt="Jahlayze">
  <div class="dropdown">
    <button class="dropbtn" onclick="toggleDropdown11()">Information</button>
    <div id="myDropdown11" class="dropdown-content">
      <p>Boosts the win chances of each hero by giving the villains kidney stones from his insane monster addiction every 3 minutes. Lasts 30 seconds ---- CHANCES TO GET THE HERO: 69% CHANCE</p>
    </div>
  </div>
</div>
    `;
    }
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
    money.innerHTML = "$" + Cash;
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
}
function heropack1function() {
    if (herotimer > 1) {
        herotimer = 0;
        console.log("you can only rent one of this hero at a time")
        timer2 = 0;
    }
    if (Cash >= 500 && herotimer <= 1) {
        intervalID = 0;
    herotimer = herotimer + 1
    Cash = Cash - 500
    console.log("you have bought hero pack 1")
    spinfunction = Math.random();
    money.innerHTML = "$" + Cash;
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
}
function heropack2function() {
    if (heropacktimer2 > 1) {
        heropacktimer2 = 0;
        console.log("you can only rent one of this hero at a time")
        timer3 = 0;
    }
    if (Cash >= 5000 && heropacktimer2 <= 1) {
        intervalID = 0;
    heropacktimer2 = heropacktimer2 + 1
    Cash = Cash - 5000
    console.log("you have bought hero pack 2")
    spinfunction2 = Math.random();
    money.innerHTML = "$" + Cash;
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
}
function heropack3function() {
    if (heropacktimer3 > 1) {
        heropacktimer3 = 0;
        console.log("you can only rent one of this hero at a time")
        timer3 = 0;
    }
    if (Cash >= 5000 && heropacktimer3 <= 1) {
        intervalID = 0;
    heropacktimer3 = heropacktimer3 + 1
    Cash = Cash - 100000
    console.log("you have bought hero pack 3")
    spinfunction3 = Math.random();
    money.innerHTML = "$" + Cash;
    } else {
        console.log("You are to broke to buy it like how you are to broke to afford food. Get a job")
    }
}
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function toggleDropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
function toggleDropdown3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
function toggleDropdown4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
function toggleDropdown5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}
function toggleDropdown6() {
  document.getElementById("myDropdown6").classList.toggle("show");
}
function toggleDropdown7() {
  document.getElementById("myDropdown7").classList.toggle("show");
}
function toggleDropdown8() {
  document.getElementById("myDropdown8").classList.toggle("show");
}
function toggleDropdown9() {
  document.getElementById("myDropdown9").classList.toggle("show");
}
function toggleDropdown10() {
  document.getElementById("myDropdown10").classList.toggle("show");
}
function toggleDropdown11() {
  document.getElementById("myDropdown11").classList.toggle("show");
}
function toggleDropdown12() {
  document.getElementById("myDropdown12").classList.toggle("show");
}
function toggleDropdown13() {
  document.getElementById("myDropdown13").classList.toggle("show");
}
function toggleDropdown14() {
  document.getElementById("myDropdown14").classList.toggle("show");
}
function toggleDropdown15() {
  document.getElementById("myDropdown15").classList.toggle("show");
}
function testingerrors() {
  console.log(hero1pack1)
}
