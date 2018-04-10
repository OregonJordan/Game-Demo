
//Play Game Script/////////////////////////////////////////////////////////////////////////////////////////////////////////
function playGame() {
	document.querySelector(".instructions_container").style.display = "none";
	document.querySelector(".gameBoard_container").style.visibility = "visible";
	document.querySelector(".gameBoard_container").style.opacity = "1";
}


//Global Variables/////////////////////////////////////////////////////////////////////////////////////////////////////////
var mainBackgroundAudio = new Audio("./soundfx/background/backgroundSound.mp3");//Main Background Music//
mainBackgroundAudio.loop = true;
var battleBackgroundAudio  = new Audio("./soundfx/background/backgroundSound2.mp3");//Battle Sequence Background Music//
battleBackgroundAudio.loop = true;

playAudio(mainBackgroundAudio);///Call to Play-Pause Music on///

///Villian|Health List///
var villianList;
villianList = ["Assassin", 20,
"Centipide", 15,
"Cerberus", 65,
"Psycho", 45,
"Ogre", 30,
"Dragon", 100,
"Ghost", 15,
"Plant", 10,
"Slime", 20, 
"Witch", 35];

///Page Load////////////////////////////////////////////////////////////////////////////////////
function pageLoad() {
	playAudio(mainBackgroundAudio);///Call to Play-Pause Music on///
	//Dice Toggle Screen Inital Visibility Hidden//
	document.querySelector(".dice_toggle").style.visibility = "hidden";
};

//Event Explore Button Pressed, Assign a Background//////////////////////////////////////////////////////////////////////////////////////////////////////
function randomBackground() {
	let img = 0;
	let villianImg;
	let x = Math.floor((Math.random() * 100) + 1);
	if (x > 0 && x < 11) {
		img = 1;
	} else if (x > 10 && x < 21) {
		img = 2;
	} else if (x > 20 && x < 31) {
		img = 3;
	} else if (x > 30 && x < 41) {
		img = 4;
	} else if (x > 40 && x < 51) {
		img = 5;
	} else if (x > 50 && x < 61) {
		img = 6;
	} else if (x > 60 && x < 71) {
		img = 7;
	} else if (x > 70 && x < 81) {
		img = 8;
	} else if (x > 80 && x < 91) {
		img = 9;
	} else if (x > 90 && x < 101) {
		img = 10;
	};
	document.querySelector("#backgroungImg").src = "./images/environment/"+img+".jpg";

	if (x == 10 || x == 20 || x == 30 || x == 40 || x == 50 || x == 60 || x == 70 || x == 80 || x == 90 || x == 100) {
		villianAssignment(x);///Call to Assign a Villian///
		playAudio(battleBackgroundAudio);///Call to Play-Pause Music on///
		pauseAudio(mainBackgroundAudio);///Call to Play-Pause Music pause///
	};

	journeyDisplayText(x, img);//Call to Game Text Display Villian Encounter
};


//Play-Pause Music//////////////////////////////////////////////////////////////////////////////////////////////////////
function pauseAudio(audio) {
	this.audio = audio;
	audio.pause(); 
};
function playAudio(audio) {
	this.audio = audio;
	//audio.currentTime = 0;
	//audio.play();
	if (this.audio.currentTime > 0) {
		this.audio.currentTime = 0;
	};
	audio.play();
};


//Assign a Villian//////////////////////////////////////////////////////////////////////////////////////////////////////
function villianAssignment(x) {
	let villianImg;

	if (x == 10) {
		villianId = "Assassin";
	} else if (x == 20) {
		villianId = "Centipide";
	} else if (x == 30) {
		villianId = "Cerberus";
	} else if (x == 40) {
		villianId = "Psycho";
	} else if (x == 50) {
		villianId = "Ogre";
	} else if (x == 60) {
		villianId = "Dragon";
	} else if (x == 70) {
		villianId = "Ghost";
	} else if (x == 80) {
		villianId = "Plant";
	} else if (x == 90) {
		villianId = "Slime";
	} else if (x == 100) {
		villianId = "Witch";
	};
	document.querySelector("#villian_img").src = "./images/villian/"+villianId+".png";
	villianImage_StatAssignment(villianId); ///Call to Assign Villian Image & Stats///
};


//Assign Villian Image & Stats//////////////////////////////////////////////////////////////////////////////////////////////////////
function villianImage_StatAssignment(villianId) {
	this.name = villianId;

	if (name == "Assassin") {
		this.health = villianList[1];
	} else if (name == "Centipide") {
		this.health = villianList[3];
	} else if (name == "Cerberus") {
		this.health = villianList[5];
	} else if (name == "Psycho") {
		this.health = villianList[7];
	} else if (name == "Ogre") {
		this.health = villianList[9];
	} else if (name == "Dragon") {
		this.health = villianList[11];
	} else if (name == "Ghost") {
		this.health = villianList[13];
	} else if (name == "Plant") {
		this.health = villianList[15];
	} else if (name == "Slime") {
		this.health = villianList[17];
	} else if (name == "Witch") {
		this.health = villianList[19];
	};
	console.log("Villian Name: " + name + " Villian Health: " + health);

	let battle = true;
	villianTransferToScreen(battle);///Call to Transition Villian Onto Screen///
	borderColorDisplay(battle);//Call to Border Color Transition//
	exploreBtnFadeDisplay(battle);//Call to Fade In-Out Explore Button//
	attack_run_BtnDisable(battle);//Call to Toggle Disable Attack Button//
	battleDisplayToggle(battle);//Call to Fade In Battle Toggle Screen//
	

	let on_off = false;
	diceDisplayStatus(on_off);//Call to Dice Display Settings//

	initialCharacterDisplay(name, health);///Call to Update Initial Character Display///
};


//Border Color Transition//////////////////////////////////////////////////////////////////////////////////////////////////////
function borderColorDisplay(battle) {
	if (battle) {
		document.querySelector(".gameBoard_container").style.borderTop = "5px solid #E60000";
		document.querySelector(".gameBoard_container").style.borderLeft = "5px solid #E60000";
		document.querySelector(".gameBoard_container").style.borderRight = "5px solid #E60000";
		document.querySelector(".gameBoard_container").style.borderBottom = "2px solid #E60000";
	} else {
		document.querySelector(".gameBoard_container").style.borderTop = "5px solid #405888";
		document.querySelector(".gameBoard_container").style.borderLeft = "5px solid #405888";
		document.querySelector(".gameBoard_container").style.borderRight = "5px solid #405888";
		document.querySelector(".gameBoard_container").style.borderBottom = "2px solid #405888";
	};
};


//Fade In-Out Explore Button//////////////////////////////////////////////////////////////////////////////////////////////////////
function exploreBtnFadeDisplay(battle) {
	if (battle) {
		document.querySelector(".explore_btn").disabled = true;
		document.querySelector(".explore_btn").style.visibility = "hidden";
		document.querySelector(".explore_btn").style.opacity = "0";
		document.querySelector(".explore_btn").style.WebkitTransitionDelay = "1s";
		document.querySelector(".explore_btn").style.transitionDelay = "1s";
		document.querySelector(".explore_btn").style.WebkitTransitionDuration = "3s";
		document.querySelector(".explore_btn").style.transitionDuration = "3s";
	} else {
		document.querySelector(".explore_btn").disabled = false;
		document.querySelector(".explore_btn").style.visibility = "visible";
		document.querySelector(".explore_btn").style.opacity = "1";
		document.querySelector(".explore_btn").style.WebkitTransitionDelay = "1s";
		document.querySelector(".explore_btn").style.transitionDelay = "1s";
		document.querySelector(".explore_btn").style.WebkitTransitionDuration = "3s";
		document.querySelector(".explore_btn").style.transitionDuration = "3s";
	};
};
	

//Transition Villian Onto Screen//////////////////////////////////////////////////////////////////////////////////////////////////////
function villianTransferToScreen(battle) {
	if (battle) {
		document.querySelector("#villian_container").style.right = "25px";
		document.querySelector("#villian_container").style.WebkitTransitionDelay = "1s";
		document.querySelector("#villian_container").style.transitionDelay = "1s";
		document.querySelector("#villian_container").style.WebkitTransitionDuration = "3s";
		document.querySelector("#villian_container").style.transitionDuration = "3s";

		document.querySelector("#villian_container img").style.width = "200px";
		document.querySelector("#villian_container img").style.opacity = "1";


		//Fade Villian Status Bar Onto Screen///////////////////////////////////////////////////////////////
		document.querySelector(".villian_stats").style.opacity = "1";
		document.querySelector(".villian_stats").style.WebkitTransitionDelay = "2s";
		document.querySelector(".villian_stats").style.transitionDelay = "2s";
		document.querySelector(".villian_stats").style.WebkitTransitionDuration = "3s";
		document.querySelector(".villian_stats").style.transitionDuration = "3s";
	} else {
		document.querySelector("#villian_container").style.right = "-300px";
		document.querySelector("#villian_container").style.WebkitTransitionDelay = "1s";
		document.querySelector("#villian_container").style.transitionDelay = "1s";
		document.querySelector("#villian_container").style.WebkitTransitionDuration = "3s";
		document.querySelector("#villian_container").style.transitionDuration = "3s";

		//Fade Villian Status Bar Onto Screen///////////////////////////////////////////////////////////////
		document.querySelector(".villian_stats").style.opacity = "0";
		document.querySelector(".villian_stats").style.WebkitTransitionDelay = "1s";
		document.querySelector(".villian_stats").style.transitionDelay = "1s";
		document.querySelector(".villian_stats").style.WebkitTransitionDuration = "3s";
		document.querySelector(".villian_stats").style.transitionDuration = "3s";
	};
};
	

//Fade In Battle Toggle Screen//////////////////////////////////////////////////////////////////////////////////////////////////////
function battleDisplayToggle(battle) {
	//Dice Toggle Display
	if (battle) {
		document.querySelector(".dice_toggle").style.visibility = "visible";
		document.querySelector(".dice_toggle").style.borderLeft = "5px solid #E60000";
		document.querySelector(".dice_toggle").style.borderRight = "5px solid #E60000";
		document.querySelector(".dice_toggle").style.borderBottom = "5px solid #E60000";
		//Dice TimeIn Toggle Settings
		document.querySelector(".dice_toggle").style.height = "100px";
		document.querySelector(".dice_toggle").style.width = "700px";
		document.querySelector(".dice_toggle").style.opacity = "1";
		document.querySelector(".dice_toggle").style.WebkitTransitionDelay = "1s";
		document.querySelector(".dice_toggle").style.transitionDelay = "1s";
		document.querySelector(".dice_toggle").style.WebkitTransitionDuration = "3s";
		document.querySelector(".dice_toggle").style.transitionDuration = "3s";
	} else {
		document.querySelector(".dice_toggle").style.visibility = "hidden";
		document.querySelector(".dice_toggle").style.borderLeft = "5px solid #405888";
		document.querySelector(".dice_toggle").style.borderRight = "5px solid #405888";
		document.querySelector(".dice_toggle").style.borderBottom = "5px solid #405888";
		//Dice TimeIn Toggle Settings
		document.querySelector(".dice_toggle").style.height = "10px";
		document.querySelector(".dice_toggle").style.width = "700px";
		document.querySelector(".dice_toggle").style.opacity = "0";
		document.querySelector(".dice_toggle").style.WebkitTransitionDelay = "1s";
		document.querySelector(".dice_toggle").style.transitionDelay = "1s";
		document.querySelector(".dice_toggle").style.WebkitTransitionDuration = "2s";
		document.querySelector(".dice_toggle").style.transitionDuration = "2s";
	};
}; 


//Dice Display Settings////////////////////////////////////////////////////////////
function diceDisplayStatus(on_off, Attack_or_Run) {
	if(on_off == false) {
		//villian
		document.querySelector(".villian_attackdice1").style.display = "none";
		document.querySelector(".villian_attackdice2").style.display = "none";
		document.querySelector(".villian_attackdice3").style.display = "none";
		document.querySelector(".villian_blockdice").style.display = "none";
		document.querySelector(".villian_rundice").style.display = "none";
		//hero
		document.querySelector(".hero_attackdice1").style.display = "none";
		document.querySelector(".hero_attackdice2").style.display = "none";
		document.querySelector(".hero_attackdice3").style.display = "none";
		document.querySelector(".hero_blockdice").style.display = "none";
		document.querySelector(".hero_rundice").style.display = "none";
		} else {
		//villian
		document.querySelector(".villian_attackdice1").style.display = "block";
		document.querySelector(".villian_attackdice2").style.display = "block";
		document.querySelector(".villian_attackdice3").style.display = "block";
		document.querySelector(".villian_blockdice").style.display = "block";
		//hero
		document.querySelector(".hero_attackdice1").style.display = "block";
		document.querySelector(".hero_attackdice2").style.display = "block";
		document.querySelector(".hero_attackdice3").style.display = "block";
		document.querySelector(".hero_blockdice").style.display = "block";
	};

	if(Attack_or_Run == "run") {
		document.querySelector(".hero_rundice").style.display = "block";
		document.querySelector(".villian_rundice").style.display = "block";
	} else {
		document.querySelector(".hero_rundice").style.display = "none";
		document.querySelector(".villian_rundice").style.display = "none";
	};
};


//Event Attack Button Pressed//////////////////////////////////
function beginAttack(Attack_or_Run) {
	rollDice(Attack_or_Run);//Call to Calculate Dice Totals//
};

//Generate Dice////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function randomDice() {
	let dice = 0;
	let x = Math.floor((Math.random() * 60) + 1);
	if (x > 0 && x < 11) {
		dice = 1;
	} else if (x > 10 && x < 21) {
		dice = 2;
	} else if (x > 20 && x < 31) {
		dice = 3;
	} else if (x > 30 && x < 41) {
		dice = 4;
	} else if (x > 40 && x < 51) {
		dice = 5;
	} else if (x > 50 && x < 61) {
		dice = 6;
	};
	return dice;
};


//Calculate Dice Totals//////////////////////////////////////////////////////////////////////////////////////////////////////
function rollDice(Attack_or_Run) {
	var diceName;
	var diceValue;
	var diceTotal = 0;
	var character;
	var j = 1;

	for (i = 1; i < 12; i++) { 
		if (i < 6) {
			character = "#villian_";
		} else {
			character = "#hero_";
		};

		//Villian Attack Dice
		if (i < 4) {
			diceName = "attackdice"
	    	diceName = diceName + [i];
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + i);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	diceTotal = diceTotal + diceValue;
	    	var villianAttackTotal = diceTotal;

	    //Villian Block Dice
		} else if (i == 4) {
			diceName = "blockdice"
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + i);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	var villianBlockValue = diceValue;

	    //Villian Run Dice
		} else if (i == 5) {
			diceName = "rundice"
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + i);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	var villianRunValue = diceValue;

	    //Hero Attack Dice	
	    	diceTotal = 0;//resetting attack dice totals to 0 so we can sum up the hero's attack dice next.
		} else if (i > 5 && i < 9) {
			diceName = "attackdice"
	    	diceName = diceName + j;
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + j);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	//Total//
	    	diceTotal = diceTotal + diceValue;
	    	var heroAttackTotal = diceTotal;
	    	j++;
	    //Hero Block Dice
	    } else if (i == 9) {
			diceName = "blockdice"
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + j);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	var heroBlockValue = diceValue;
	   		j++;
	   	//Hero Run Dice
		} else if (i == 10) {	   		
			diceName = "rundice"
	    	diceValue = randomDice();//Call to Generate Dice//
	    	console.log("Roll: " + j);
	    	diceImageAssignment(character, diceName, diceValue, Attack_or_Run);//Call to Assign Dice Images//
	    	var heroRunValue = diceValue;
		};
	};

	let on_off = true;//Turn on dice visibility
	diceDisplayStatus(on_off, Attack_or_Run)//Call to Dice Display Settings//

	console.log("Villian AttackDiceTotal: " + villianAttackTotal);
	console.log("Villian BlockDiceValue: " + villianBlockValue);
	console.log("Villian RunDiceValue: " + villianRunValue);
	console.log("Hero AttackDiceTotal: " + heroAttackTotal);
	console.log("Hero BlockDiceValue: " + heroBlockValue);
	console.log("Hero RunDiceValue: " + heroRunValue);

	winningDiceTransform(villianAttackTotal, villianBlockValue, villianRunValue, heroAttackTotal, heroBlockValue, heroRunValue, Attack_or_Run);
};


//Assign Dice Images////////////////////////////////////////////////////////////////////////////////////////////////////////////
function diceImageAssignment(character, diceName, diceValue, Attack_or_Run) {
	let src = "";
	this.character = character;
	this.diceName = diceName;
	this.diceValue = diceValue;

	console.log("Character: " + character + diceName + " DiceValue: " + diceValue);
	document.querySelector(character + diceName).src = "./images/dice/"+diceValue+".png";
};


//Transition Winning Attack Dice//////////////////////////////////
function winningDiceTransform(villianAttackTotal, villianBlockValue, villianRunValue, heroAttackTotal, heroBlockValue, heroRunValue, Attack_or_Run) {
	if (villianAttackTotal > heroAttackTotal && villianBlockValue != heroBlockValue) {
		document.querySelector(".villian_attackdice1").style.bottom = "50px";
		document.querySelector(".villian_attackdice2").style.bottom = "50px";
		document.querySelector(".villian_attackdice3").style.bottom = "50px";
		document.querySelector(".hero_attackdice1").style.bottom = "10px";
		document.querySelector(".hero_attackdice2").style.bottom = "10px";
		document.querySelector(".hero_attackdice3").style.bottom = "10px";
	} else if (heroAttackTotal > villianAttackTotal && heroBlockValue != villianBlockValue) {
		document.querySelector(".hero_attackdice1").style.bottom = "50px";
		document.querySelector(".hero_attackdice2").style.bottom = "50px";
		document.querySelector(".hero_attackdice3").style.bottom = "50px";
		document.querySelector(".villian_attackdice1").style.bottom = "10px";
		document.querySelector(".villian_attackdice2").style.bottom = "10px";
		document.querySelector(".villian_attackdice3").style.bottom = "10px";
	} else if (heroAttackTotal == villianAttackTotal){
		document.querySelector(".villian_attackdice1").style.bottom = "50px";
		document.querySelector(".villian_attackdice2").style.bottom = "50px";
		document.querySelector(".villian_attackdice3").style.bottom = "50px";
		document.querySelector(".hero_attackdice1").style.bottom = "50px";
		document.querySelector(".hero_attackdice2").style.bottom = "50px";
		document.querySelector(".hero_attackdice3").style.bottom = "50px";
	} else {
		document.querySelector(".villian_attackdice1").style.bottom = "10px";
		document.querySelector(".villian_attackdice2").style.bottom = "10px";
		document.querySelector(".villian_attackdice3").style.bottom = "10px";
		document.querySelector(".hero_attackdice1").style.bottom = "10px";
		document.querySelector(".hero_attackdice2").style.bottom = "10px";
		document.querySelector(".hero_attackdice3").style.bottom = "10px";
	};

	if (villianBlockValue > heroBlockValue && villianAttackTotal != heroAttackTotal) {
		document.querySelector(".villian_blockdice").style.bottom = "50px";
		document.querySelector(".hero_blockdice").style.bottom = "10px";
	} else if (heroBlockValue > villianBlockValue && heroAttackTotal != villianAttackTotal){
		document.querySelector(".hero_blockdice").style.bottom = "50px";
		document.querySelector(".villian_blockdice").style.bottom = "10px";
	} else if (villianBlockValue == heroBlockValue && villianAttackTotal != heroAttackTotal) {
		document.querySelector(".villian_blockdice").style.bottom = "50px";
		document.querySelector(".hero_blockdice").style.bottom = "50px";
	} else {
		document.querySelector(".villian_blockdice").style.bottom = "10px";
		document.querySelector(".hero_blockdice").style.bottom = "10px";
	};

	if (villianRunValue > heroRunValue && Attack_or_Run == "run") {
		document.querySelector(".villian_rundice").style.bottom = "50px";
		document.querySelector(".hero_rundice").style.bottom = "10px";

		document.querySelector(".villian_attackdice1").style.bottom = "50px";
		document.querySelector(".villian_attackdice2").style.bottom = "50px";
		document.querySelector(".villian_attackdice3").style.bottom = "50px";
		document.querySelector(".hero_attackdice1").style.bottom = "10px";
		document.querySelector(".hero_attackdice2").style.bottom = "10px";
		document.querySelector(".hero_attackdice3").style.bottom = "10px";
		document.querySelector(".villian_blockdice").style.bottom = "10px";
		document.querySelector(".hero_blockdice").style.bottom = "10px";
	} else if (heroRunValue > villianRunValue && Attack_or_Run == "run"){
		document.querySelector(".hero_rundice").style.bottom = "50px";
		document.querySelector(".villian_rundice").style.bottom = "10px";

		document.querySelector(".villian_attackdice1").style.bottom = "10px";
		document.querySelector(".villian_attackdice2").style.bottom = "10px";
		document.querySelector(".villian_attackdice3").style.bottom = "10px";
		document.querySelector(".hero_attackdice1").style.bottom = "10px";
		document.querySelector(".hero_attackdice2").style.bottom = "10px";
		document.querySelector(".hero_attackdice3").style.bottom = "10px";
		document.querySelector(".villian_blockdice").style.bottom = "10px";
		document.querySelector(".hero_blockdice").style.bottom = "10px";
	} else if (villianRunValue == heroRunValue && Attack_or_Run == "run") {
		document.querySelector(".hero_rundice").style.bottom = "50px";
		document.querySelector(".villian_rundice").style.bottom = "50px";

		document.querySelector(".villian_attackdice1").style.bottom = "50px";
		document.querySelector(".villian_attackdice2").style.bottom = "50px";
		document.querySelector(".villian_attackdice3").style.bottom = "50px";
		document.querySelector(".hero_attackdice1").style.bottom = "10px";
		document.querySelector(".hero_attackdice2").style.bottom = "10px";
		document.querySelector(".hero_attackdice3").style.bottom = "10px";
		document.querySelector(".villian_blockdice").style.bottom = "10px";
		document.querySelector(".hero_blockdice").style.bottom = "10px";
	};

	if (Attack_or_Run != "run") {
		if (villianAttackTotal > heroAttackTotal && villianBlockValue > heroBlockValue) {
			healthStatusUpdate("hero", (villianAttackTotal-heroAttackTotal));//Call to Update Character Health During Battle And Death Soundfx Trigger
		};
		if (heroAttackTotal > villianAttackTotal && heroBlockValue > villianBlockValue) {
			healthStatusUpdate("villian", (heroAttackTotal-villianAttackTotal));//Call to Update Character Health During Battle And Death Soundfx Trigger
		};
		if (heroAttackTotal == villianAttackTotal || heroBlockValue == villianBlockValue) {
			healthStatusUpdate("even", "0");//Call to Update Character Health During Battle And Death Soundfx Trigger
		};
		if (villianAttackTotal > heroAttackTotal && heroBlockValue > villianBlockValue || heroAttackTotal > villianAttackTotal && villianBlockValue > heroBlockValue) {
			healthStatusUpdate("block", "0");//Call to Update Character Health During Battle And Death Soundfx Trigger
		};
	} else if (heroRunValue > villianRunValue) {
		audio = new Audio("./soundfx/run_away/runAway.mp3");//Run Away soundfx//
		playAudio(audio);//Call to Play Audio
		gameDisplayResets();

		battleDisplayText("run");//Game Text Display Battle Sequence
	} else {
		healthStatusUpdate("hero", (villianAttackTotal));//Call to Update Character Health During Battle And Death Soundfx Trigger
		audio = new Audio("./soundfx/run_away/failed_run.mp3");//Failed Run Away Attempt soundfx//
		playAudio(audio);//Call to Play Audio
	};

	console.log("Attack or Run: " + Attack_or_Run)
};


//Update Initial Character Display//////////////////////////////////////////////////////////////////////////////////////////////////////
function initialCharacterDisplay(name, health) {
	//Villian Update
	document.querySelector("#villian_name").innerHTML = " " + this.name;
	document.querySelector("#villian_health").innerHTML = " " + this.health;
};


//Update Character Health During Battle And Death Soundfx Trigger////////////////////////////////////////////////////////////////////////////////////////////////
function healthStatusUpdate(character, damage) {

	var villianHealth = document.querySelector("#villian_health").innerHTML;
	var heroHealth = document.querySelector("#hero_health").innerHTML;
	let villianDead = false;
	let heroDead = false;

	if (character == "hero") {
		document.querySelector("#hero_health").innerHTML = heroHealth - damage;

		if (document.querySelector("#hero_health").innerHTML <= 0) {
			let audio = new Audio("./soundfx/death/hero_death.mp3");//hero death soundfx//
			playAudio(audio);//Call to Play Audio
			document.querySelector("#hero_health").innerHTML = 0;
			gameDisplayResets();

			heroDead = true;
			heroDeathTransition(heroDead);//Call to Hero Death Sequence
		} else {
			audio = new Audio("./soundfx/fight_sequence/hero_damage.mp3");//damage soundfx//
			playAudio(audio);//Call to Play Audio
			audio = new Audio("./soundfx/fight_sequence/hero_damage2.mp3");//damage soundfx//
			playAudio(audio);//Call to Play Audio
		};
	};

	if (character == "villian") {
		document.querySelector("#villian_health").innerHTML = villianHealth - damage;

		if (document.querySelector("#villian_health").innerHTML <= 0) {
			let audio = new Audio("./soundfx/death/villian_death.mp3");//villian death soundfx//
			playAudio(audio);//Call to Play Audio
			document.querySelector("#villian_health").innerHTML = 0;
			gameDisplayResets();

			villianDead = true;
			villianDeathTransition(villianDead);//Call to Villian Death Sequence
		} else {
			audio = new Audio("./soundfx/fight_sequence/damage.mp3");//damage soundfx//
			playAudio(audio);//Call to Play Audio

			document.querySelector("#villian_container").style.background = "2px solid red";
			
		};
	};
	if (character == "even") {
		let audio = new Audio("./soundfx/fight_sequence/miss.mp3");//miss soundfx//
			playAudio(audio);//Call to Play Audio
	};
	if (character == "block") {
		let audio = new Audio("./soundfx/fight_sequence/block.mp3");//block soundfx//
			playAudio(audio);//Call to Play Audio
			audio = new Audio("./soundfx/fight_sequence/block2.mp3");//block soundfx//
			playAudio(audio);//Call to Play Audio
	};

	battleDisplayText(character, damage, villianDead);//Game Text Display Battle Sequence
};


//Reset Default Attack Sequence Settings (dice images set to hidden)//////////////////////////////////
function gameDisplayResets() {
	playAudio(mainBackgroundAudio);///Call to Play-Pause Music on///
	pauseAudio(battleBackgroundAudio);///Call to Play-Pause Music pause///

	let battle = false;
	borderColorDisplay(battle);//Call to Border Color Transition//
	exploreBtnFadeDisplay(battle);//Call to Fade In-Out Explore Button//
	attack_run_BtnDisable(battle);//Call to Toggle Disable Attack Button//
	battleDisplayToggle(battle);//Call to Fade In Battle Toggle Screen//
	villianTransferToScreen(battle);///Call to Transition Villian off Screen///
};


//Toggle Disable Attack Button//////////////////////////////////////////////////////////////////////////////////////////////////////
function attack_run_BtnDisable(battle) {
	if (battle) {
		document.querySelector("#attack_btn").style.visibility = "visible";
		document.querySelector("#run_btn").style.visibility = "visible";
		document.querySelector("#attack_btn").disabled = true;
		document.querySelector("#run_btn").disabled = true;
		setTimeout(buttonEnable_VisibleDelay, 3000, "attack");
		setTimeout(buttonEnable_VisibleDelay, 3000, "run");
	} else {
		document.querySelector("#attack_btn").style.visibility = "hidden";
		document.querySelector("#run_btn").style.visibility = "hidden";
	};
};


//Villian Death Sequence////////////////////////////////////////////////////////////////////////////////////////////////////////////
function villianDeathTransition(villianDead) {
	if (villianDead) {
		document.querySelector("#villian_img").src = "./images/skull.png";
		document.querySelector("#villian_img").style.width = "1000px";
		document.querySelector("#villian_img").style.WebkitTransitionDelay = ".2s";
		document.querySelector("#villian_img").style.transitionDelay = ".2s";
		document.querySelector("#villian_img").style.WebkitTransitionDuration = "1.4s";
		document.querySelector("#villian_img").style.transitionDuration = "1.4s";
		document.querySelector("#villian_img").style.opacity = "0";
	};
};


//Hero Death Sequence////////////////////////////////////////////////////////////////////////////////////////////////////////////
function heroDeathTransition(heroDead) {
	if (heroDead) {
		document.querySelector("#backgroungImg").src = "./images/hero_death.jpg";
		document.querySelector("#backgroungImg").style.WebkitTransitionDelay = ".5s";
		document.querySelector("#backgroungImg").style.transitionDelay = ".5s";
		document.querySelector("#backgroungImg").style.WebkitTransitionDuration = "2s";
		document.querySelector("#backgroungImg").style.transitionDuration = "2s";
		document.querySelector("#backgroungImg").style.opacity = "1";
		document.querySelector("#backgroungImg").style.zIndex = "2";
	};
};


//Attack Button On Click Timed Deactivate////////////////////////////////////////////////////////////////////////////////////////////////////////////
function attackBtnOnClickDisable() {
	document.querySelector("#attack_btn").disabled = true;
	document.querySelector("#attack_btn").style.opacity = ".8";
	document.querySelector("#attack_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#attack_btn").style.transitionDuration = ".3s";

	document.querySelector("#run_btn").disabled = true;
	document.querySelector("#run_btn").style.opacity = ".8";
	document.querySelector("#run_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#run_btn").style.transitionDuration = ".3s";

	beginAttack("attack");//Call to Event Attack Button Pressed
	setTimeout(buttonOnClickEnabled, 800)//Call to Attack and Run Button On Click Timed Re-Activate
};


//Run Button On Click Timed Deactivate////////////////////////////////////////////////////////////////////////////////////////////////////////////
function runBtnOnClickDisable() {
	document.querySelector("#run_btn").disabled = true;
	document.querySelector("#run_btn").style.opacity = ".8";
	document.querySelector("#run_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#run_btn").style.transitionDuration = ".3s";

	document.querySelector("#attack_btn").disabled = true;
	document.querySelector("#attack_btn").style.opacity = ".8";
	document.querySelector("#attack_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#attack_btn").style.transitionDuration = ".3s";

	beginAttack("run");//Call to Event Attack Button Pressed
	setTimeout(buttonOnClickEnabled, 800)//Call to Attack and Run Button On Click Timed Re-Activate
};


//Attack and Run Button On Click Timed Re-Activate////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buttonOnClickEnabled() {
	document.querySelector("#run_btn").disabled = false;
	document.querySelector("#run_btn").style.opacity = "1";
	document.querySelector("#run_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#run_btn").style.transitionDuration = ".3s";

	document.querySelector("#attack_btn").disabled = false;
	document.querySelector("#attack_btn").style.opacity = "1";
	document.querySelector("#attack_btn").style.WebkitTransitionDuration = ".3s";
	document.querySelector("#attack_btn").style.transitionDuration = ".3s";
};


//Button Enabled and Visible Delay////////////////////////////////////////////////////////////////////////////////////////////////////////////
function buttonEnable_VisibleDelay(name) {
	document.querySelector("#" + name + "_btn").disabled = false;
	document.querySelector("#" + name + "_btn").style.visibility = "visible";
};


///Journey Text List///
var journeyList;
journeyList = 
["I have travelled 20 miles to the West and am now lost",
"My journey has led me here. Where is this place?",
"What is this strange place you have stumbled upon?",
"I think I should rest after walking for two days.",
"It's beginning to smell like dragons.",
"My armor is beginning to chafe I think I'll rest a bit.",
"I'm starting to regret why I started this journey.",
"Ewww, what a grimey little bug.",
"I hope there's a tavern at the next town.",
"What do you want? Go ahead press that button again. I dare you!"];

//Game Text Display Villian Encounter////////////////////////////////////////////////////////////////////////////////////////////////////////////
function journeyDisplayText(x, img) {
	//let villianName = document.querySelector("#villian_name").innerHTML;
	let displayText;
	if (x == 10) {
		displayText = "Dang, I didn't see that cleverly disguised trap. Wait, this guy has guns! Ok who's big idea was that?";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 20 ) {
		displayText = "Oh common, how many legs do you need? No really, how many? I'll cut you down to size.";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 30 ) {
		displayText = "Come here you cute little doggy....What in the heck is that thing? This is going to be a mess.";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 40 ) {
		displayText = "Jimminy Christmas!! I think I crapped my self a tiny bit. Look at this guys tongue!";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 50 ) {
		displayText = "AHHH Hu.. Hu... HuGE thing. Where's my gun?";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 60 ) {
		displayText = "Oh of course you put Dragons in here! I picked the wrong career. Is it to late to be a dog walker?";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 70 ) {
		displayText = "I'm so scared! Look at me shaking in my soft, fluffy, little boots.... come here you!";
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 80 ) {
		displayText = 'A plant! Really? Hold on while I look for some trimmers in my "GIANT bag of yard tools".... Lame!';
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 90 ) {
		displayText = "Well don't you look like a huge snot ball! HA let me wipe that for you with this shiny hanky!"
		document.querySelector("#game_message").innerHTML = displayText;
	} else if (x == 100 ) {
		displayText = "BOO!";
		document.querySelector("#game_message").innerHTML = displayText;
	} else {
		let text = (img);
		document.querySelector("#game_message").innerHTML = journeyList[(text - 1)];
	};
};


//Game Text Display Battle Sequence////////////////////////////////////////////////////////////////////////////////////////////////////////////
function battleDisplayText(character, damage, villianDead) {
	
	if (character == "hero") {
		document.querySelector("#game_message").innerHTML = "<br>The " + document.querySelector("#villian_name").innerHTML + " Attacks!<br><br>You suffer " + damage + " damage";
	} else if (character == "villian") {
		document.querySelector("#game_message").innerHTML = "<br>Your attack on the<br>" + document.querySelector("#villian_name").innerHTML + " is sound,<br><br> Dealing " + damage + " damage";
	} else if (character == "even") {
		document.querySelector("#game_message").innerHTML = "<br>Both strikes have fallen short of their mark, <br><br> Dealing 0 damage";
	} else if (character == "block") {
		document.querySelector("#game_message").innerHTML = "<br>The attack has been blocked, <br><br> Dealing 0 damage";
	};

	if (villianDead) {
		document.querySelector("#game_message").innerHTML = "<br>Victory!<br> A bloody one but a victory no less.";
	};

	if (character == "run") {
		document.querySelector("#game_message").innerHTML = "<br>No one likes a Coward!";
	};
};
