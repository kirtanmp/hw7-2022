var video;



window.addEventListener("load", function(){
	console.log("Good job opening the window");
	video=document.getElementById("player1");
	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
	video.load();
});


document.querySelector("#play").addEventListener("click", function(){
	console.log("Play the video!");
	video.play();
	var volume=document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%"
});
		
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause the video!");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	var curr = document.querySelector("video").playbackRate;
	var now = curr * .9;
	console.log(now);
	document.querySelector("video").playbackRate = now;
	

	console.log("Slow down Video");
});
	
document.querySelector("#faster").addEventListener("click", function(){
	var curr = document.querySelector("video").playbackRate;
	var now = curr / .9;
	console.log(now);
	document.querySelector("video").playbackRate = now;
});

document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime + 10 <= video.duration){
		video.currentTime = video.currentTime + 10;	
	}
	else{
		video.currentTime = 0;
		//come back to the pause part
		video.pause();
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted== false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else if(video.muted == true){
		console.log("yo");
		video.muted = false;
		document.getElementById("mute").innerHTML = "mute";
	}
		
});


document.querySelector("#slider").addEventListener("click", function(){

	var volume=document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";

	video.volume = volume / 100;
});


const buttonAdd = document.querySelector('#vintage');
buttonAdd.addEventListener('click', addClass);

const buttonRemove = document.querySelector('#orig');
buttonRemove.addEventListener('click', removeClass);

function addClass(){
	const element = document.querySelector('.video');
	element.classList.add('oldSchool');
}

function removeClass(){
	const element = document.querySelector('video');
	element.classList.remove('oldSchool');
}

