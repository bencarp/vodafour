// Timer function that counts up the total amount of time played
function timer() {
	timer = setTimeout(function () {
		seconds++;
		if (seconds > 59) {
			seconds = 0;
			minutes++;

			if (minutes < 10) {
				$('#minutes').text('0' + minutes + ':');
			} else $('#minutes').text(minutes + ':');
		}

		if (seconds < 10) {
			$('#seconds').text('0' + seconds);
		} else {
			$('#seconds').text(seconds);
		}
	}, 1000);
}

function openfullscreen() {
	var element = document.documentElement;
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) { // If user is playing on FireFox
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) { // If user is playing on Chrome, Safari or Opera
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) { // If user is playing on IE/Edge
		element.msRequestFullscreen();
	}
}

function closefullscreen() {
    if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function playercolor() {
	if (playernr == 1) {
		$('#player_color').text('Your color is red');
	} else $('#player_color').text('Your color is yellow');
}

function to_home() {
	if (socket.readyState == 3) {
		document.location.href = "/";
	} else
		alert("The game is not over yet, please finish the game or forfeit before going back to the homescreen.");
};

function forfeit() {

}

function setName(message) {
	console.log(document.cookie.length)
	if (document.cookie.length == 0) {
		first_time = true //User accessed the game for the first time
		name = prompt(message) //Ask them for a username
		document.cookie = "name=" + name + "; max-age=" + 10000000000
		document.cookie = "times_accessed=1; max-age=" + 10000000000
	} else if (invalid_name_count != 0) {
		first_time = true
		let cookie = document.cookie.split(";")
		let times_accessed = parseInt(cookie[1].split("=")[1], 10) + 1
		name = prompt(message)
		document.cookie = "name=" + name + "; max-age=" + 10000000000
		document.cookie = "times_accessed=" + times_accessed + "; max-age=" + 10000000000
	} else {
		first_time = false
		let cookie = document.cookie.split(";")
		name = cookie[0].split("=")[1]
		let times_accessed = parseInt(cookie[1].split("=")[1], 10) + 1
		document.cookie = "name=" + name + ";max-age=" + 10000000000
		document.cookie = "times_accessed=" + times_accessed + "; max-age=" + 10000000000

	}
}

// If we want the "How to play"section on the splashscreen to pop out - a function to expand the element as a block with text. At first it will never show the instructions.
//$("#how-to")[0].style.display = "none" // Uncaught TypeError for now
$("#how-but").on("click", function () {
    var x = $("#how-to")[0]
    if (x.style.display == "none") {
        x.style.display = "block"
        console.log('1')
    } else {
        console.log(2)
        x.style.display = "none"
    }
})