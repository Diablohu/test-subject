function getRandomInt(min, max) {
	if( typeof max == 'undefined' )
		return getRandomInt(0, min)
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



Q.sleep = function(duration, callback){
	callback = callback || function(){}
	var deferred = Q.defer()
	setTimeout(function(){
		callback()
		deferred.resolve()
	}, duration || 0)
	return deferred.promise
};



// https://developer.mozilla.org/en-US/docs/Web/Events/scroll
	function registerOptimizedScroll(type, name, obj) {
		var obj = obj || window;
		var running = false;
		var func = function() {
			if (running) { return; }
			running = true;
			requestAnimationFrame(function() {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	}
	registerOptimizedScroll("scroll", "optimizedScroll");
