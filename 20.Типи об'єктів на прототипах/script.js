function Mp3(playlist){
	this.track = undefined;
	this.playlist = playlist;
}

Mp3.prototype.pause = function () {
	console.log("Пауза");
};

Mp3.prototype.stop = function () {
	console.log("Стоп");
	this.track = undefined;
};

Mp3.prototype.play = function () {
	console.log("Воспроизведение");
		if(this.track == undefined){
			this.track = 0;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else {
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
};

Mp3.prototype.nextSong = function () {
	console.log("Следующая песня");
		if(this.track >= 0 && this.track < this.playlist.length - 1){
			this.track++;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else if (this.track >= this.playlist.length - 1) {
			this.track = 0;
			console.log("Сейчас играет: " + this.playlist[this.track]);
    }
};

Mp3.prototype.previousSong = function () {
	console.log("Предыдущая песня");
		if(this.track >= 1){
			this.track--;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
		else if(this.track == 0){
			this.track = this.playlist.length - 1;
			console.log("Сейчас играет: " + this.playlist[this.track]);
		}
};
	
var playlist1 = new Mp3(["a.mp3", "b.mp3", "c.mp3", "d.mp3"]);
var playlist2 = new Mp3(["1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3"]);

playlist1.play();
playlist1.nextSong();
playlist1.nextSong();
playlist1.previousSong();
playlist1.stop();

playlist2.play();
playlist2.nextSong();
playlist2.nextSong();
playlist2.previousSong();
playlist2.stop();
playlist2.play();
playlist2.pause();
playlist2.play();