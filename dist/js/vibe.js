// Bank some good vibe options
const vibes = [
	" And you are awesome!",
	" Have a wonderful day!",
	" And you've got this!",
	" So is this puppy! 🐶",
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);
