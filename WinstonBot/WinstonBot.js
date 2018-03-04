const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

var HEROES = [
	"The one, the champ, Anub'arak",
	'Alarak',
	'Chromie',
	'Falstad',
	'ChoGall',
	'Greymane',
	"Gul'dan",
	'Illidan',
	'Jaina',
	"Kael'thas",
	'Kerrigan',
	'Li-Ming',
	'Lunara',
	'Nova',
	'Ragnoros',
	'Raynor',
	'Samuro',
	'The Butcher',
	'Thrall',
	'Tracer',
	'Tychus',
	'Valla',
	'That faggot, Varian',
	'Zeratul',
	"Zul'jin",
	'Azmodan',
	'Gazlowe',
	'Medivh',
	'Murky',
	'Nazeebo',
	'Sgt. Hammer',
	'Sylvanas',
	'The Lost Vikings',
	'Xul',
	'Zagara',
	'Auriel',
	'Brightwing',
	'Kharazim',
	'Li li',
	'Lt. Morales',
	'Malfurion',
	'Rehgar',
	'Tassadar',
	'Tyrande',
	'Uther',
	'Artanis',
	'Arthas',
	'Chen',
	'My boy, Dehaka',
	'Diablo "The most chosen hero" -Nick',
	'E.T.C.',
	'Johanna',
	'Leoric',
	'Muradin',
	'Rexxar',
	'Sonya',
	'Stiches',
	'Tyrael',
	'Zarya',
	'Abathur'
];


var WINSTON = {
	butlerMode: false,
	magicNum: 0,
	guessCount: 0,
	guessRecord: 0,
	guessChamp: "noOne",
	guessRecord2: 0,
	guessChamp2: "noOne",
	guessRecord3: 0,
	guessChamp3: "noOne",
	guessDifficulty: 1,
	guessHintLevel: 1,
	guessLow: 0,
	guessHigh: 0
};

function containsWinston(msg) {
	return msg.content.toLowerCase().includes("winston");
};
function containsStartsWithCollection(coll, msg) {
	var i, len;
	for (i = 0, len = coll.length; i < len; i++) {
		if (msg.content.toLowerCase().startsWith(coll[i])) {
			return msg;
		}
	}
	return false;
};
function containsCollection(coll, msg) {
	var i, len;
	for (i = 0, len = coll.length; i < len; i++) {
		if (msg.content.toLowerCase().includes(coll[i])) {
			return msg;
		}
	}
	return false;
};

function containsCollectionNotMessage(coll, msg) {
	var i, len;
	for (i = 0, len = coll.length; i < len; i++) {
		if (msg.toLowerCase().includes(coll[i])) {
			return msg;
		}
	}
	return false;
};

function winstonInvestigate(args, msg) {
	var index = 2;
	var asize = args.length;
	for (index; index < args; index++) {
		msg.channel.sendMessage(guild.available);
	}
};

function winstonInBetween(msg) {
	var args = msg.content.toLowerCase().split(" ");
	var index = 0;
	var low;
	var high;

	for (index; index < args.length; index++) {
		if (args[index] === 'between') {
			break;
		}
	}

	if ((args.length - index) < 2) {
		return "Sir, I don't think you know how to play this game...";
	}
	index++;

	for (index; index < args.length; index++) {
		low = parseInt(args[index]);
		if (String(low) != "NaN") {
			if (low < 0) {
				return "Let's try to keep it above 0 please.";
			}
			else if (low >= 1000000) {
				return "Let's try to keep it below 1000000 please.";
			}
			else {
				break;
			}
		}
	}
	index++;
	for (index; index < args.length; index++) {
		high = parseInt(args[index]);
		if (String(high) != "NaN") {
			if (high < 0) {
				return "Let's try to keep it above 0 please.";
			}
			else if (high >= 1000000) {
				return "Let's try to keep it below 1000000 please.";
			}
			else if (high === low) {
				return "....I pick.... I pick " + low + "...";
			}
			else if (high < low) {
				high = low;
				low = Number(args[index]);
			}
			var wPick = Math.floor((Math.random() * ((high - low) + 1)) + low);
			return "Very good sir, I pick: " + wPick + "."
		}
	}
	return "Sir, I am afraid you did not provide a sufficient amount of numbers.";
};

function randomWinston(msg) {
	var index = Math.floor(Math.random() * 9);
	switch (index) {
		case 0:
			return 'Good show, ' + msg.author.username + '.';
		case 1:
			return 'Jolly good show!';
		case 2:
			return 'Hmmm, indeed.';
		case 3:
			return 'Bolly!';
		case 4:
			return 'Now, now, ' + msg.author.username + ', have some class.';
		case 5:
			return "Yup, there it is.";
		case 6:
			return "Eureka!";
		case 7:
			return 'Mmm, mmm, very good.';
		case 8:
			return 'Another nice one from team ' + msg.author.username + '!';
		default:
			return "Something isn't right... I need Ryan's help, ";
	}
};

function winstonGreeting() {
	var index = Math.floor(Math.random() * 8);
	switch (index) {
		case 0:
			return 'Howdy ';
		case 1:
			return 'Hello ';
		case 2:
			return 'Hi ';
		case 3:
			return 'Welcome, ';
		case 4:
			return 'Good seeing you, ';
		case 5:
			return "Hey, I know that guy! It's "
		case 6:
			return "Top o' the mornin to ya, "
		case 7:
			return 'Hey '
		default:
			return "Something isn't right... I need Ryan's help, ";
	}
};

function winstonBye(msg) {
	var index = Math.floor(Math.random() * 8);
	switch (index) {
		case 0:
			return 'Bye ' + msg.author.username + ".";
		case 1:
			return 'Goodbye ' + msg.author.username + ".";
		case 2:
			return 'Have a good one, ' + msg.author.username + ".";
		case 3:
			return 'So long, ' + msg.author.username + ".";
		case 4:
			return 'Goodnight, ' + msg.author.username + ".";
		case 5:
			return "Have a grand time, " + msg.author.username + ".";
		case 6:
			return "Don't do what I wouldn't do, " + msg.author.username + ".";
		case 7:
			return 'See you later ' + msg.author.username + ".";
		default:
			return "Something isn't right... I need Ryan's help, ";
	}
};

function winstonHelpDialogue(msg) {
	var response = "Well perhaps a monologue will help you?\n\nI can be interacted with by simply including my name in a message.\n\ne.g. 'Hi [MyName]!'\n\nNo need to be case sensitive.\nIn addition to this there are special commands that I listen for.\n-include my name and 'guess: [number]' to partake in the number game.\n-ask me 'who is the best' to find out who is winning the game.\n-'I have need of you, [MyName]' will force me to follow admin commands.\n-'You are dismissed, [MyName]' will return me to myself";

	msg.channel.sendMessage(response);
}

function winstonThanks(msg) {
	var index = Math.floor(Math.random() * 8);
	var uname = msg.author.username;
	switch (index) {
		case 0:
			return 'You are too kind, ' + uname + '.';
		case 1:
			return 'Oh you!';
		case 2:
			return 'Thanks!';
		case 3:
			return 'I should be complimenting you instead, ' + uname + '.';
		case 4:
			return 'Follow my mustache with your lips.';
		case 5:
			return "I don't know what to say...";
		case 6:
			return "We call statements like that: Pulling the ol' " + uname + '.';
		case 7:
			return 'Such kindness!';
		default:
			return "Something isn't right... I need Ryan's help ";
	}
};
function welcomeWinston(msg) {
	var index = Math.floor(Math.random() * 5);
	var uname = msg.author.username;


	switch (index) {
		case 0:
			return 'Thank you, ' + uname + ', it has been some time.';
		case 10:
			return 'Thank you, ' + uname + '.';
		case 20:
			return 'It is good to be here.';
		case 30:
			return 'I am glad to be back!';
		case 40:
			return 'Follow my mustache with your lips.';
		default:
			return "Something isn't right... I need " + '@Leo Krupps#1017' + " help ";
	}

}

function winstonRebuttal(msg) {
	var index = Math.floor(Math.random() * 8);
	var uname = msg.author.username;
	switch (index) {
		case 0:
			return 'Well I never!';
		case 1:
			return 'Very rude.';
		case 2:
			return uname + ' is a bit of a dick...';
		case 3:
			return uname + ', ' + uname + ', tsk, tsk.';
		case 4:
			return 'Well I WAS happy...';
		case 5:
			return "Augh!";
		case 6:
			return "Oh!";
		case 7:
			return 'Who taught you manners, ' + uname + '?';
		default:
			return "Something isn't right... I need Ryan's help ";
	}
};

function winstonIntro(msg) {
	var index = Math.floor(Math.random() * 8);
	var uname = msg.author.username;
	switch (index) {
		case 0:
			return 'It is I!';
		case 1:
			return 'Me.';
		case 2:
			return 'Some old guy.';
		case 3:
			return 'What? Who?';
		case 4:
			return 'Huh? What?';
		case 5:
			return "I am just some young lad.";
		case 6:
			return uname + " needs to ask less questions.";
		case 7:
			return 'That is a stupid question, ' + uname + '.';
		default:
			return "Something isn't right... I need Ryan's help ";
	}
};

function winstonAck(msg) {
	var index = Math.floor(Math.random() * 8);
	var uname = msg.author.username;
	switch (index) {
		case 0:
			return '?';
		case 1:
			return 'Yes?';
		case 2:
			return 'What?';
		case 3:
			return 'Need something?';
		case 4:
			return 'How can I assist you?';
		case 5:
			return "...";
		case 6:
			return "What's up?";
		case 7:
			return 'Huh?';
		default:
			return "Something isn't right... I need Ryan's help ";
	}
};
function standingsWinston(msg) {
	var uname = msg.author.username;
	var result = 'Certainly, ' + uname;
	var brooks2Ryan = 0;
	var brooks2Michael = 0;
	var ryan2Brooks = 0;
	var ryan2Michael = 0;

	brooks2Ryan += 9;
	brooks2Michael += 10;
	brooks2Ryan += 50;
	brooks2Michael += 20;

	result += '\n==============CONCLUDED=============\nBrooks owes Ryan: $' + brooks2Ryan + ' (Pending)';
	result += '\nBrooks owes Colin 1 Dinner (Pending)';
	result += '\nBrooks owes Michael $' + brooks2Michael + ' (Pending)';
	result += '\n\nbreakdown:';
	result += '\nRose beats Joanna, Brooks owes Ryan +$5';
	result += '\nBrooks owes Colin a dinner for some reason...';
	result += '\n GSP Beats Bisping, Brooks owes Ryan $50 and Michael $20';
	result += '\nNo gloves touch for TJ and Cody, Ryan owes Brooks $1';
	result += '\nTJ beats Cody, Brooks owes Ryan +$5 and Michael +$10';
	result += '\n==============PENDING===============';
	result += '\n5$:Tybura(Ryan) VS Werdum(Brooks)';

	return result;
};

function winstonHotsTeam(msg) {
	var teamValue = 0;
	var uname = msg.author.username;
	var response = "Certainly " + uname + ".\n";
	var hArray = HEROES;
	response += "How about: \n";

	var rNum;
	var team = "";

	while (teamValue < 5) {

		rNum = Math.floor(Math.random() * hArray.length);
		if (hArray[rNum] == 'ChoGall') {
			if (teamValue <= 3 && !containsCollectionNotMessage(['chogall'], team)) {
				teamValue += 2;
				team += (hArray[rNum] + "\n");
			}
		}
		else if (!containsCollectionNotMessage([hArray[rNum]], team)) {
			teamValue++;
			team += (hArray[rNum] + "\n");
		}


	}
	return response += team;
}

function winstonHotsHero(msg) {
	var uname = msg.author.username;
	var response = "Certainly " + uname + ".\n";
	var hArray = HEROES;
	var rNum = Math.floor(Math.random() * hArray.length);
	response += "How about: " + hArray[rNum] + "?";
	return response;
}

function winstonLeaderboard(msg) {
	var response = "Well let me tell you, " + msg.author.username + ".\n\n";
	if (WINSTON.guessRecord === 0) {
		response += "As of now, no one is the champion of krupps!\nWho will take the belt?";
	}
	else {
		response += "The krupps champion is " + WINSTON.guessChamp + ".\nThis position is secured with a krupps record of " + WINSTON.guessRecord + " guesses.";
	}

	if (WINSTON.guessRecord2 !== 0) {
		response += "\n\nIt stands to note that " + WINSTON.guessChamp2 + " holds the silver medal with " + WINSTON.guessRecord2 + " guesses.";
	}
	if (WINSTON.guessRecord3 !== 0) {
		response += "\n\nAnd if I MUST mention it... " + WINSTON.guessChamp3 + " holds the wooden medal with " + WINSTON.guessRecord3 + " guesses.";
	}

	msg.channel.sendMessage(response);
};

function register(msg) {
	var response = "";
	if (msg.content.split("'").length == 1) {
		response += "Forgive me sure, but I need a name to register you as.";
		response += "\nPerhaps ask me to register you as: Register me as a user \'Your Name\'";
	} else if (msg.content.split("'").length == 2) {
		response += "You have placed me in an awkward position... you appear to be lacking an end apostrophe.... please use proper formatting...";
	} else if (msg.content.split("'").length > 3) {
		response += "You have too many apostrophes... stop it...";
	} else if (msg.content.split("'")[1].length > 50) {
		response += "What is this... this is stupid... don't do that.";
	} else {
		response += "Certainly " + msg.author.username + ". Give me one moment...\n";
		let name = msg.content.split("'")[1];
		var user = {
			"discordId": "" + msg.author.id,
			"name": "" + name
		}
		var headers = {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		var options = {
			url: 'http://127.0.0.1:8085/WinstonServer/RegisterUser',
			method: 'POST',
			headers: headers,
			form: { 'discordId': user["discordId"], 'name': user["name"] }
		}
		request(options, function (error, response, body) {
			if (error) {
				msg.channel.sendMessage("My server.. my life line.. appears to be down!");
			} else if (response.statusCode == 200 && body == "SUCCESS") {
				// Print out the response body
				msg.channel.sendMessage("It is done!");
			} else {
				// Print out the response body
				msg.channel.sendMessage("It appears that you have already registered.");
			}
		});
	}

	msg.channel.sendMessage(response);
};

function placeDirectBet(msg) {
	var response = "";
	if (msg.content.split(":").length == 1) {
		response += "You forgot to use a colon (:)";
	} else if (msg.content.split("'").length != 7 || msg.content.split("!").length != 3) {
		response += "Your format is all wrong. Here is an example: \"Winston, I would like to place a direct bet: 'ryan' 'brooks' !amount! 'Details of the bet'\"";
	} else if (msg.content.split("!")[1].search(" ") != -1 || isNaN(msg.content.split("!")[1]) == true) {
		response += "The amount you are betting makes no sense...";
	} else {
		var name1 = msg.content.split("'")[1];
		var name2 = msg.content.split("'")[3];
		var amount = parseInt(msg.content.split("!")[1]);
		var details = msg.content.split("'")[5];


		response += "Placing a bet now..."
		var headers = {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		var options = {
			url: 'http://127.0.0.1:8085/WinstonServer/PlaceDirectBet',
			method: 'POST',
			headers: headers,
			form: { 'name1': name1, 'name2': name2, 'amount': amount, 'details': details }
		}

		request(options, function (error, response, body) {

			response += "Placing bet...";
			if (error) {
				msg.channel.sendMessage("Something weird happened....");
			} else {
				if (body.includes("SUCCESS")) {
					// Print out the response body
					msg.channel.sendMessage("It is done!");
				}
				if (body.includes("FAILURE")) {
					// Print out the response body
					msg.channel.sendMessage("No good...");
				}
			}
		});
	}

	msg.channel.sendMessage(response);
};

function pickAPokemon(msg) {
	var response = "One moment sir...";
	if (msg.content.split(":").length != 2) {
		response += "I don't understand what you are asking...";
	} else if(msg.content.split(":")[1].search(" ") != -1 || isNaN(msg.content.split(":")[1]) == true){
		response += "Format your pokemon request as :#";
	} else {
		var pokedex = msg.content.split(":")[1];
		var pokeUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokedex + '/';

		var headers = {
			'User-Agent': 'Super Agent/0.0.1',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
		var options = {
			url: pokeUrl,
			method: 'GET',
			headers: headers,
		}

		request(options, function (error, response, body) {

			
			if (error) {
				msg.channel.sendMessage("Something weird happened....");
			} else {
				
				var chance = Math.floor(Math.random() * 500);
				var data = JSON.parse(body);
				if(chance == 250 && data['sprites']['front_shiny']!=null){
					response ="Oh my, what a rare find....\n";
					response += 'You found a SHINY ' + data['name'] + '\n'
					response += data['sprites']['front_shiny'];
					msg.channel.sendMessage(response);
				}else{
					response="";
					response += 'You found a ' + data['name'] + '\n';
					response += data['sprites']['front_default']
					msg.channel.sendMessage(response);
				}

			}
		});
	}

	return response;
};

function showAllBets(msg) {
	var response = "";

	response += "Yes sir, one moment..."
	var headers = {
		'User-Agent': 'Super Agent/0.0.1',
		'Content-Type': 'application/x-www-form-urlencoded'
	}
	var options = {
		url: 'http://127.0.0.1:8085/WinstonServer/SelectDirectBets',
		method: 'POST',
		headers: headers,
		form: {}
	}

	request(options, function (error, response, body) {

		response += "Placing bet...";
		if (error) {
			msg.channel.sendMessage("Something weird happened....");
		} else {

				console.log("test");
				var results = JSON.parse(body);
				
				var betsResponse = "";
				for(var x in results){
					console.log(x);
					betsResponse += results[x]['id'];
					betsResponse += ": ";
					betsResponse += results[x]['details'] + "| for $" + results[x]['betAmount'];
					betsResponse += "| ";
					betsResponse += results[x]['user1'] + " VS " + results[x]['user2'] + " | ";
					if(results[x]['betStatus'] == "1"){
						betsResponse += "RESULT PENDING";
					}
					betsResponse += "\n";
				}

				msg.channel.sendMessage(betsResponse);

		}
	});


	msg.channel.sendMessage(response);
};

function getMagicNum(msg) {
	var response ="";

	if(msg.author.id==='239661622790979584'){
		response += "Yes sir, the number is " + WINSTON.magicNum + "\n";
	}else{
		response += "Blow it out you ass, sir.";
	}
	

	return response;
};

function winGame(msg) {
	var response ="";

	if(msg.author.id==='239661622790979584'){
		response += "Yes sir, the number is " + WINSTON.magicNum + "\n";
	}else{
		response += "Blow it out your ass, sir.";
	}
	

	return response;
};

function guessingGame(args, msg) {
	var guess;
	for (var i = 0; i < args.length; i++) {
		guess = parseInt(args[i]);
		if (String(guess) != "NaN") {
			WINSTON.guessCount = (WINSTON.guessCount + 1);
			if (guess < 0) {
				return "Sir, your guess should be higher than 0";
			}
			else if (guess >= 1000000) {
				return "Your guess should be less than 1000000";
			}
			else if (guess < WINSTON.magicNum) {
				return "Good guess, alas, it is too low.";
			}
			else if (guess > WINSTON.magicNum) {
				return "Good guess, alas, it is too high.";
			}
			else if (guess === WINSTON.magicNum) {
				var winnerMessage = "That is correct, perfect job as always, " + msg.author.username + "." + "\nAnd in only " + WINSTON.guessCount + " guesses.";
				if (WINSTON.guessRecord === 0) {
					WINSTON.guessRecord = WINSTON.guessCount;
					WINSTON.guessChamp = msg.author.username;
					winnerMessage += ("\nCongratulations sir! I am proud to announce " + WINSTON.guessChamp + " as the new champion with " + WINSTON.guessCount + " guesses!");
				}
				else {
					if (WINSTON.guessCount > WINSTON.guessRecord) {
						winnerMessage += ("\nBut not good enough to beat " + WINSTON.guessChamp + "'s record of " + WINSTON.guessRecord + " guesses.");
						if (WINSTON.guessCount > WINSTON.guessRecord2) {
							if (WINSTON.guessRecord2 !== 0) {
								WINSTON.guessRecord3 = WINSTON.guessRecord2;
								WINSTON.guessChamp3 = WINSTON.guessChamp2;
							}
							else {
								WINSTON.guessRecord2 = WINSTON.guessCount;
								WINSTON.guessChamp2 = msg.author.username;
							}
						} else {
							if (WINSTON.guessCount > WINSTON.guessRecord3) {
								WINSTON.guessRecord3 = WINSTON.guessCount;
								WINSTON.guessChamp3 = msg.author.username;
							}
						}
					}
					if (WINSTON.guessCount === WINSTON.guessRecord) {
						winnerMessage += ("\nOh no, so close. But you tied with " + WINSTON.guessChamp + "'s record of " + WINSTON.guessCount + " guesses.");
						if (WINSTON.guessCount === WINSTON.guessRecord2) {
							if (WINSTON.guessCount !== WINSTON.guessRecord3) {
								WINSTON.guessRecord3 = WINSTON.guessCount;
								WINSTON.guessChamp3 = msg.author.username;
							}
						} else {
							if (WINSTON.guessRecord2 !== 0) {
								WINSTON.guessRecord3 = WINSTON.guessRecord2;
								WINSTON.guessChamp3 = WINSTON.guessChamp2;
							}
							WINSTON.guessRecord2 = WINSTON.guessCount;
							WINSTON.guessChamp2 = msg.author.username;
						}
					}
					if (WINSTON.guessCount < WINSTON.guessRecord) {
						var oldChamp = WINSTON.guessChamp;
						var oldRecord = WINSTON.guessRecord;
						if (WINSTON.guessRecord2 !== 0) {
							WINSTON.guessRecord3 = WINSTON.guessRecord2;
							WINSTON.guessChamp3 = WINSTON.guessChamp2;
						}
						WINSTON.guessRecord2 = WINSTON.guessRecord;
						WINSTON.guessChamp2 = WINSTON.guessChamp;
						WINSTON.guessRecord = WINSTON.guessCount;
						WINSTON.guessChamp = msg.author.username;
						winnerMessage += ("\nCongratulations sir! I am proud to announce " + WINSTON.guessChamp + " as the new champion with " + WINSTON.guessCount + " guesses!");
						winnerMessage += ("\nThis has dethroned the old champion, " + oldChamp + ", who had " + oldRecord + " guesses.");
					}
				}
				WINSTON.guessCount = 0;
				//WINSTON.magicNum = 123456;
				WINSTON.magicNum = Math.floor(Math.random() * 1000000);
				return winnerMessage;
			}
		}
	}
	return "Sir, typically people provide a number with their guess.";
};

client.on('ready', () => {
	WINSTON.magicNum = Math.floor(Math.random() * 1000000);
	//WINSTON.magicNum = 123456;
	console.log('Magic number determined');
	console.log('Shields up, Winstons online');
});

//Normal Bot Interactions	
client.on('message', message => {

	var randoWin = Math.floor(Math.random() * 100);

	if (randoWin === 0) {
		message.channel.sendMessage(randomWinston(message));
	}
	if (WINSTON.butlerMode === false) {
		if (message.content.toLowerCase() === 'i have need of you, winston') {
			if (message.author.id === '239661622790979584') { //id for god
				message.reply('How may I be of service, sir?');
				WINSTON.butlerMode = true;
			}
			else {
				message.channel.sendMessage(message.author.username + ' is a bit full of their self...');
			}
		}
		else if (message.content.toLowerCase() === 'winston') {
			message.channel.sendMessage(winstonAck(message));
		}
		else if (containsWinston(message)) {
			var args = message.content.split(" ");
			if (containsCollection(['fuck', 'fag', 'gay', 'ass', 'shit', 'fool'], message)) {
				message.channel.sendMessage(winstonRebuttal(message));
			}
			else if (containsCollection(['help'], message)) {
				winstonHelpDialogue(message);
			}
			else if (containsCollection(['who is the best'], message)) {
				winstonLeaderboard(message);
			}
			else if (containsStartsWithCollection(['hi', 'hello', 'evenin', 'good mornin', 'mornin', 'hey', 'yo '], message)) {
				message.channel.sendMessage(winstonGreeting() + message.author.username + '.');
			}
			else if (containsCollection(['bye', 'goodbye', 'goodnight', 'cya', 'later', 'take it easy', 'so long', 'have a good one'], message)) {
				message.channel.sendMessage(winstonBye(message));
			}
			else if (containsStartsWithCollection(['who'], message)) {
				message.channel.sendMessage(winstonIntro(message));
			}
			else if (containsCollection(['coffee'], message)) {
				message.channel.sendMessage('Here you are, ' + message.author.username + '.');
				message.channel.sendMessage(':coffee:');
			}
			else if (containsCollection(['cute', 'love', 'best', 'handsome', 'cool', 'neat', 'great', 'decent'], message)) {
				message.channel.sendMessage(winstonThanks(message));
			}
			else if (containsCollection(['pick a number between'], message)) {
				message.channel.sendMessage(winstonInBetween(message));
			}
			else if (containsCollection(['guess:'], message)) {
				message.channel.sendMessage(guessingGame(args, message));
			}
			else if (containsCollection(['pick', 'roll'], message)) {
				if (containsCollection(['heroes of the storm', 'hots'], message)) {
					if (containsCollection(['hero '], message)) {
						message.channel.sendMessage(winstonHotsHero(message));
					}
					else if (containsCollection(['team'], message)) {
						message.channel.sendMessage(winstonHotsTeam(message));
					}
				}
			}
			else if (containsCollection(['welcome back'], message)) {
				message.channel.sendMessage(welcomeWinston(message));
			}
			else if (containsCollection(['standings'], message)) {
				message.channel.sendMessage(standingsWinston(message));
			}
			else if (containsCollection(['register'], message)) {
				message.channel.sendMessage(register(message));
			}
			else if (containsCollection(['place a direct bet'], message)) {
				message.channel.sendMessage(placeDirectBet(message));
			}
			else if (containsCollection(['all bets'], message)) {
				message.channel.sendMessage(showAllBets(message));
			}
			else if (containsCollection(['magic number'], message)) {
				message.channel.sendMessage(getMagicNum(message));
			}
			else if (containsCollection(['pokemon', 'pokemon:'], message)) {
				message.channel.sendMessage(pickAPokemon(message));
			}
			//pickAPokemon
		}
	}//Butler mode interactions
	else {
		if (message.content.toLowerCase() === 'you are dismissed, winston') {
			if (message.author.id === '239661622790979584') { //id for god
				message.reply('Thank you sir.');
				WINSTON.butlerMode = false;
			}
			else {
				message.channel.sendMessage('Shut the hell up, ' + message.author.username);
			}
		}
		var args = message.content.split(" ");
		if (args[0].toLowerCase() === 'winston,') {
			if (args.length > 1) {
				if (args[1].toLowerCase() === 'investigate') {
					if (args.length > 2) {
						winstonInvestigate(args, message);
					}
					else {
						message.channel.sendMessage('Investigate who, sir?');
					}
				}
				else {
					message.channel.sendMessage('Terribly sorry sir, I do not know what you want.');
				}
			}
			else {
				message.channel.sendMessage('Sir?');
			}
		}
		if (args[0].toLowerCase() === 'test') {
			//message.channel.sendMessage(client); //object
			//message.channel.sendMessage(message.author.email);
			//message.channel.sendMessage(client.winston.bot);
			//message.channel.sendMessage(client.user.username); //practiceBot
			//message.channel.sendMessage(client.users.length);
			var inv;
			var response;
			message.channel.sendMessage("Certainly sir: \n")
			for (inv in message) {
				response += (inv + ': Which is a ' + typeof (message[inv]) + '\n');
			}
			message.channel.sendMessage(response);
			message.channel.sendMessage("\nThis concludes all the info you requested.")
		}
	}
});



client.login('MjY0NDExMTY2MjA0MjMxNjgw.C0gLqQ.wDGNlX3l9_QxzBKSaqEzwymi85c');