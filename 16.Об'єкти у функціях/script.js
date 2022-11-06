// Task 1


function createMp3(playlist){
	return {
    playlist: playlist,
    track: undefined,
    pause: function () {
      console.log("Пауза");
    },
    stop: function () {
      console.log("Стоп");
      this.track = undefined;
    },
    play: function () {
      console.log("Воспроизведение");
      if (this.track == undefined) {
        this.track = 0;
        console.log("Сейчас играет: " + this.playlist[this.track]);
      } else {
        console.log("Сейчас играет: " + this.playlist[this.track]);
      }
    },
    nextSong: function () {
      console.log("Следующая песня");
      if (this.track >= 0 && this.track < this.playlist.length - 1) {
        this.track++;
        console.log("Сейчас играет: " + this.playlist[this.track]);
      } else if (this.track >= this.playlist.length - 1) {
        this.track = 0;
        console.log("Сейчас играет: " + this.playlist[this.track]);
      }
    },
    previousSong: function () {
      console.log("Предыдущая песня");
      if (this.track >= 1) {
        this.track--;
        console.log("Сейчас играет: " + this.playlist[this.track]);
      } else if (this.track == 0) {
        this.track = this.playlist.length - 1;
        console.log("Сейчас играет: " + this.playlist[this.track]);
      }
    }
  };
}

var myPlaylist = createMp3([
  "mysong1.mp3",
  "mysong2.mp3",
  "mysong3.mp3",
  "mysong4.mp3",
]);

myPlaylist.play();
myPlaylist.nextSong();
myPlaylist.previousSong();
myPlaylist.stop();
myPlaylist.play();
myPlaylist.pause();
myPlaylist.play();






// Task 2
/*

var salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250,
};

var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

function maxSalary(salaries){
	var arr = [];
	for (var key in salaries) {
    arr.push(salaries[key]);
  }
	var max = 0;
	for(var num of arr){
		if(max < num){
			max = num;
		}
	}
	return max;
}

console.log(maxSalary(salaries1));
console.log(maxSalary(salaries2));

*/