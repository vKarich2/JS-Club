// Task 1


var user = {
	name: "Cris",
	surname: "Simons",
	display: function (){
		console.log(user.name);
		console.log(user.surname);
	}
};
user.display();

user.name = "Brain";
user.display();

delete user.name;
user.display();






// Task 2
/*

// Variant 1 - Стандартний
var car = {};
  car.model = "Audi";
  car.speed = 200;
  car.run = function () {
    console.log(car.model + " їде зі швидкістю " + car.speed);
  };
  car.stop = function () {
    console.log(car.model + " зупинилася ");
  };
car.run();
car.stop();


// Variant 2 - Масивів
var car = {};
  car["model"] = "Audi";
  car["speed"] = 200;
  car["run"] = function () {
    console.log(car.model + " їде зі швидкістю " + car.speed);
  };
  car["stop"] = function () {
    console.log(car.model + " зупинилася ");
  };
car.run();
car.stop();


// Variant 3 - Спрощений
var car = {
	model: "Audi",
	speed: 200,
	run: function(){
		console.log(car.model + " їде зі швидкістю " + car.speed);
	},
	stop: function(){
		console.log(car.model + " зупинилася ");
	}
};
car.run();
car.stop();

*/




// Task 3
/*

var tv = {
	currentChannel: 1,
	nextChannel: function(){
		tv.currentChannel++;
		console.log("Current channel is " + tv.currentChannel);
	},
	previousChannel: function(){
		tv.currentChannel--;
		console.log("Current channel is " + tv.currentChannel);
	},
	setChannel: function(){
		tv.currentChannel = Number(prompt("Set the channel"));
		console.log("Current channel is " + tv.currentChannel);
	}
};

tv.nextChannel();
tv.previousChannel();
tv.setChannel();

*/




// Task 4
/*

var mp3 = {
	track: undefined,
	playlist: ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"],
	pause: function(){
		console.log("Пауза");
	},
	stop: function(){
		console.log("Стоп");
		this.track = undefined;
	},
	play: function (){
		console.log("Воспроизведение");
		if(this.track == undefined){
			this.track = 0;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else {
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
	},
	nextSong: function(){
		console.log("Следующая песня");
		if(this.track >= 0 && this.track < this.playlist.length - 1){
			this.track++;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else if (this.track >= this.playlist.length - 1) {
			this.track = 0;
			console.log("Сейчас играет: " + this.playlist[this.track]);
    }
	},
	previousSong: function(){
		console.log("Предыдущая песня");
		if(this.track >= 1){
			this.track--;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else if(this.track == 0){
			this.track = this.playlist.length - 1;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
	}
};

mp3.play();
mp3.nextSong();
mp3.nextSong();
mp3.nextSong();
mp3.nextSong();
mp3.previousSong();
mp3.previousSong();
mp3.stop();
mp3.play();
mp3.pause();
mp3.play();

*/




// Task 5
/*

var programmer = [
  {
    name: "John",
    age: 28,
    experience: 1,
    languages: ["Java", "JavaScript", "SQL"],
  },

  {
    name: "Bill",
    age: 30,
    experience: 5,
    languages: ["HTML", "CSS", "JavaScript"],
  },

  {
    name: "John",
    age: 32,
    experience: 4,
    languages: ["Python", "SQL"],
  }
];

console.log(programmer[0]);
console.log(programmer[1].name);
console.log(programmer[2].languages);

for(var i = 0; i < programmer.length; i++){
	console.log(programmer[i]);
}

*/




// Task 6
/*

var fullObj = {
	name: "Bill",
	age: 20,
	job: "QA Engineer"
};
var emptyObj = {};

function isEmpty(obj){
	if (Object.entries(obj).length == 0){
		console.log(true);
	}
	else console.log(false);
}

isEmpty(fullObj);
isEmpty(emptyObj);

*/




// Task 7
/*

// 1 part
var sum = 0;

var salaries = {
	John: 100,
	Bill: 200,
	Mike: 250,
	
};

for(var key in salaries){
	sum += salaries[key];
}

console.log(sum / Object.entries(salaries).length);

// 2 part
sum = 0;

var salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};

for (var key in salaries) {
  sum += salaries[key];
}

console.log(sum / Object.entries(salaries).length);

*/