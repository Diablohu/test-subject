/* global scenes */
/* global Q */

scenes.recruit = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,reqs = [
			'能够自发思考行动的你，',
			'坦率热情的你，',
			'体贴细致的你。'
		]
		,container = $('<div class="requiments"/>').appendTo($scene)
	
	$('<h2/>').html('我们需要').prependTo($scene)
	
	
	
	reqs.forEach(function(req, index){
		promise_chain = promise_chain.then(function(){
			return Q.sleep(250,function(){
				$('<p class="requiment animated fadeInLeft"/>')
					.html(req)
					.appendTo(container)
			})
		})
	})

	// 开始异步函数链
		promise_chain = promise_chain
		
		.then(function(){
			return Q.sleep(1250, function(){
				$('<h3 class="animated fadeIn"/>').html('我们为你准备了广阔的晋升平台').appendTo($scene)
			})
		})
		
		.then(function(){
			return Q.sleep(1000, function(){
				var imgcontainer = $('<p class="route animated fadeIn"/>')
						.append($('<img src="assets/images/recruit-route.png"/>'))
						.appendTo($scene)
					,imgcontainerXStart = 0
				imgcontainer.hammer().bind('panstart', function(e){
					gPan = false
					imgcontainerXStart = imgcontainer.scrollLeft()
					console.log('img panstart', imgcontainerXStart)
				}).bind('panmove', function(e){
					imgcontainer.scrollLeft(imgcontainerXStart - e.gesture.deltaX)
				}).bind('panend pancancel', function(e){
					setTimeout(function(){
						gPan = true
						console.log('img panend')
					}, 10)
				})
			})
		})
		
		.then(function(){
			return Q.sleep(1000)
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}