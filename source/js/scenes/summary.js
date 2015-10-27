/* global scenes */
/* global Q */

scenes.summary = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,container = $('<div/>')
						.html(`
						<h2>
							<span class="animated fadeInUp">　梦，</span>
							<span class="animated fadeInUp">　成长，</span>
							<span class="animated fadeInUp">　在路上。</span>
						</h2>
						<h2>
							<span class="animated fadeInUp">　十年无印，</span>
							<span class="animated fadeInUp">　良人招募。</span>
						</h2>
						`)
						.appendTo($scene)
	
	$('<p class="final animated fadeIn">储备干部 全国招聘</p>')
		.on('animationend webkitAnimationEnd', function(e){
			if( e.currentTarget == e.target )
				setTimeout(function(){
					$body.trigger('scenefinish')
				}, 500)
		})
		.appendTo(container)
	
	/*

	// 开始异步函数链
		promise_chain

		.then(function(){
			return Q.sleep(1000 + 750 + 750 + 1250 + 750 + 1000 + 1000)
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
		*/
}