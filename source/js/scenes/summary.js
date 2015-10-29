/* global scenes */
/* global Q */

scenes.summary = function($scene){
	var container = $('<div/>')
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
	
	//$('<p class="final animated fadeIn">储备干部 全国招聘</p>')
	$('<p class="final animated fadeIn"></p>')
		.on('animationend webkitAnimationEnd', function(e){
			if( e.currentTarget == e.target )
				//setTimeout(function(){
					$body.trigger('scenefinish')
				//}, 500)
		})
		.appendTo(container)
}