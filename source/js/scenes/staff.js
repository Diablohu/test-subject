/* global scenes */
/* global Q */

scenes.staff = function($scene){
	var promise_chain 	= Q.fcall(function(){})

	// 开始异步函数链
		promise_chain

		.then(function(){
			return Q.sleep(1000)
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}