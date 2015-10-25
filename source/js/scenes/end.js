/* global scenes */
/* global Q */

scenes.end = function($scene){
	var promise_chain 	= Q.fcall(function(){})
	
	$('<h2/>').html('未来十年，期待与你共同走过。').prependTo($scene)
	$('<p class="center animated fadeInUp"/>')
		.append(
			$('<a/>',{
				'class':	'nextscene',
				'href':		'http://zp.muji.com.cn',
				'target':	'_blank',
				'html':		'点击了解更多'
			})
		).appendTo($scene)

	// 开始异步函数链
		promise_chain
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}