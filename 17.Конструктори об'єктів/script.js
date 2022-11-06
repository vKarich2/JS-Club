function Mp3(playlist) {
	this.playlist = playlist;
	this.track = undefined;
	this.pause = function () {
    console.log("Пауза");
  },
  this.stop = function () {
    console.log("Стоп");
    this.track = undefined;
  },
  this.play = function () {
    console.log("Воспроизведение");
    if (this.track == undefined) {
      this.track = 0;
      console.log("Сейчас играет: " + this.playlist[this.track]);
    } else {
      console.log("Сейчас играет: " + this.playlist[this.track]);
    	}
  },
  this.nextSong = function () {
    console.log("Следующая песня");
    if (this.track >= 0 && this.track < this.playlist.length - 1) {
      this.track++;
      console.log("Сейчас играет: " + this.playlist[this.track]);
    } else if (this.track >= this.playlist.length - 1) {
      	this.track = 0;
      	console.log("Сейчас играет: " + this.playlist[this.track]);
      }
    },
  this.previousSong = function () {
    console.log("Предыдущая песня");
    if (this.track >= 1) {
      this.track--;
      console.log("Сейчас играет: " + this.playlist[this.track]);
    } else if (this.track == 0) {
      	this.track = this.playlist.length - 1;
        console.log("Сейчас играет: " + this.playlist[this.track]);
    	}
  	}
}

var myPlaylist = new Mp3(["track1", "track2", "track3", "track4"]);

myPlaylist.play();
myPlaylist.nextSong();
myPlaylist.nextSong();
myPlaylist.previousSong();
myPlaylist.stop();
myPlaylist.play();
myPlaylist.pause();
myPlaylist.play();