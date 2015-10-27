/* global scenes */
/* global Q */

scenes.entry = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,container = $('<div/>').prependTo($scene)
		
	$('<p class="center animated fadeIn"/>')
		.html('无印十年光阴，与您相伴同行。<br />良人正在招募，期待您的加入。')
		.appendTo(container)

	// 开始异步函数链
		promise_chain
		
		.then(function(){
			return Q.sleep(500)
		})
		.done(function(){
			$body.trigger('scenefinish')
		})
}