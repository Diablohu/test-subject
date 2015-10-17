/* global $ */

var $html, $body, $main
	,scene_name = []
	,scene_els = []
	,scenes = {}







window.onload = (function(){
	$html = $('html')
	$body = $('body')
	$main = $body.find('main')
				.on('touchstart', function(){
					$main.removeClass('is-scrollhint')
				})

	// make indicator input element for each scene
	// cache scene name
	// empty scene element when changed to next scene
		var $indicators = $('<div class="indicators"/>').appendTo($main)
		scene_els = $main.find('.scene')
		scene_els.each(function(i, scene){
			scene = $(scene)
			$('<span/>',{
				'data-scene':	i+1
			}).appendTo($indicators)
			scene_name[i] = scene.attr('data-scene-name')
			scene.on('transitionend webkitTransitionEnd', function(e){
				if( e.currentTarget == e.target
					&& e.originalEvent.propertyName == 'opacity'
					&& parseFloat(scene.css('opacity')) === 0
				){
					scene.empty()
				}
			})
		})
	
	// scroll hint
		$('<div class="scrollhint animated flash"/>').appendTo($main)
	
	// remove loader when loaded (opacity transition to 0)
		var $loader = $main.find('.loader')
		$loader.on('transitionend webkitTransitionEnd', function(e){
			if( e.currentTarget == e.target
				&& e.originalEvent.propertyName == 'opacity'
				&& parseFloat($loader.css('opacity')) === 0
			){
				$loader.remove()
			}
		})
	
	// next scene button
		var $nextscene = $main.find('button.nextscene')
		$nextscene.on('click', function(){
			$body.trigger('scenenext')
		})

	// bind custom events
		$body.on({
			'scenechange': function(e, scenenumber){
				if( !scenenumber )
					return
				$main.attr('data-scene', scenenumber)
					.attr('data-scene-name', scene_name[scenenumber-1])
				$body.removeClass('is-ready-nextscene')
				$main.removeClass('is-scrollhint')
				
				// run specific scene function
					if( scenes[ scene_name[scenenumber-1] ] )
						scenes[ scene_name[scenenumber-1] ]( scene_els.eq(scenenumber-1) )
			},
			'scenenext': function(){
				$body.trigger('scenechange', [parseInt($main.attr('data-scene') || 0) + 1])
			},
			'scenefinish': function(){
				$nextscene.trigger('blur')
				if( $main.attr('data-scene') < scene_name.length )
					$body.addClass('is-ready-nextscene')
			}
		})

	setTimeout(function(){
		$body.addClass('is-loaded')
		$body.trigger('scenenext')
	}, 1000)
})