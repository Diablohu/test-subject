/* global scenes */
/* global Q */

scenes.recruit = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,reqs = [
			'能够自发思考行动的你，',
			'坦率热情的你，',
			'体贴细致的你。'
		]
		,container2
	
	$('<h2/>').html('储备干部 全国招聘').prependTo($scene)

	// 开始异步函数链
		promise_chain = promise_chain
		
		.then(function(){
			return Q.sleep(1000, function(){
				var container = $('<div class="requirements"/>').appendTo($scene)
				
				$('<h3 class="animated fadeIn"/>').html('我们需要').appendTo(container)
				
				reqs.forEach(function(req, index){
					$('<p class="requirement requirement-'+(index+1)+' animated fadeInLeft"/>')
						.html(req)
						.appendTo(container)
				})
			})
		})
		
		.then(function(){
			return Q.sleep(1250 + (250 * reqs.length), function(){
				container2 = $('<div class="route"/>').appendTo($scene)
				$('<h3 class="animated fadeIn"/>').html('我们为你准备了广阔的晋升平台').appendTo(container2)
			})
		})
		
		.then(function(){
			return Q.sleep(1000, function(){
				$('<p class="animated fadeIn"/>')
						.append($('<img src="assets/images/recruit-route-3.png"/>'))
						.appendTo(container2)
				/*
				var imgcontainer = $('<p class="animated fadeIn"/>')
						.append($('<img src="assets/images/recruit-route-2-fix.png"/>'))
						.appendTo(container2)
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
				*/
			})
		})
		
		.then(function(){
			return Q.sleep(1000)
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}