/* global scenes */
/* global Q */

scenes.photos = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,popup_speed = 0.75 // second

	// 开始异步函数链
		promise_chain
	
	// 照片墙
	// portrait 6x7
	// landscape 7x6
		.then(function(){
			for(var y=1; y<8; y++ ){
				for(var x=1; x<7; x++ ){
					if(!(
						( y == 2 && x == 5 )
						|| ( y == 3 && x == 4 )
						|| ( y == 3 && x == 5 )
						|| ( y == 6 && x == 3 )
						|| ( y == 7 && x == 2 )
						|| ( y == 7 && x == 3 )
					)){
						var delay = getRandomInt(1, 42 - 3 - 3) * (popup_speed / 20)
						$('<div/>',{
							'class':	'unit y'+y + ' x'+x
						}).css({
							'animation-delay':		delay + 's',
							'-webkit-animation-delay':		delay + 's'
						})
						.append($('<span/>').css('background-image', 'url(assets/images/scene-photos-'+y+'-'+x+'.jpg)'))
						.appendTo($scene)
					}
				}
			}
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				$scene.addClass('animating')
				deferred.resolve()
			}, 100)
			return deferred.promise
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1250)
			return deferred.promise
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}