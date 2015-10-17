function getRandomInt(min, max) {
	if( typeof max == 'undefined' )
		return getRandomInt(0, min)
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

