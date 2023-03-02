var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause ⏸";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play ►";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play ►";
}
$(document).ready(function(){
    $("body").ripples({
    resolution: 200,
    perturbance: .004,
});
});
function afficherCitation() {
	var citation = document.getElementById("citation");
	if (citation.style.display === "none") {
	  citation.style.display = "block";
	} else {
	  citation.style.display = "none";
	}
  }
  
