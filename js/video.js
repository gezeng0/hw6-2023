var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	video.autoplay = false;
	console.log("Auto play is set to false")
    video.loop = false;
	console.log("Loop is set to false")

	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
	});

	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1;
		console.log("Slow down video");
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.1;
		console.log("Speed up video");
		console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
		console.log("Skip ahead");
		console.log("Video current time is " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
		if (video.muted) {
			console.log("Mute");
		}
		else {
			console.log("Unmute");
		}
	});

	document.querySelector("#volume").innerHTML = slider.value + "%";
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = slider.value / 100;
		document.querySelector("#volume").innerHTML = slider.value + "%";
		console.log("The current value is " + video.volume);
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});

});



