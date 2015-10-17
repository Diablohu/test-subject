/* global scenes */
/* global Q */

scenes.summary = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,$title = $('<h2><span>梦，</span></h2>').appendTo($scene)
		,$title2

	// 开始异步函数链
		promise_chain

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1000)
			return deferred.promise
		})
		
		.then(function(){
			return $('<span class="animated fadeInUp">成长，</span>').appendTo($title)
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 750)
			return deferred.promise
		})
		
		.then(function(){
			return $('<br /><span class="animated fadeInUp">在路上。</span>').appendTo($title)
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1250)
			return deferred.promise
		})
		
		.then(function(){
			$title2 = $('<h2><span class="animated fadeInUp">十年无印，</span></h2>').appendTo($scene)
			return $title2
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 750)
			return deferred.promise
		})
		
		.then(function(){
			return $('<br /><span class="animated fadeInUp">良人招募。</span>').appendTo($title2)
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1000)
			return deferred.promise
		})
		
		.then(function(){
			return $('<p class="final animated fadeInUp">未来十年，期待与你共同走过。</p>').appendTo($scene)
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1000)
			return deferred.promise
		})
		
		.then(function(){
			return $('<p class="center animated fadeInUp"/>')
				.append(
					$('<a/>',{
						'class':	'nextscene',
						'href':		'http://zp.muji.com.cn',
						'target':	'_blank',
						'html':		'点击了解更多'
					})
				).appendTo($scene)
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 1000)
			return deferred.promise
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}