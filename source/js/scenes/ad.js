/* global scenes */
/* global Q */

scenes.ad = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,$recruit
	
	$main.addClass('is-scrollhint')
	
	$(`<h2>记忆有痕，</h2><h2>无印相伴。</h2>`).appendTo($scene)

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
			var deferred = Q.defer()
			
			$(`<h3 class="animated fadeInUp">
				无印伙伴全国招募
				</h3><br/>
				<h4 class="animated fadeInUp">（店铺/café&meal）</h4>`)
			.on('animationend webkitAnimationEnd', function(e){
				if( e.target == e.currentTarget ){
					console.log(e)
					deferred.resolve()
				}
			})
			.appendTo($scene)

			return deferred.promise
		})

		.then(function(){
			var deferred = Q.defer()
			setTimeout(function(){
				deferred.resolve()
			}, 250)
			return deferred.promise
		})
		
		.then(function(){
			var deferred = Q.defer()
			
			$recruit = $('<div class="recruit animated fadeInUp"/>')
				.html(`
					<hr />
					
					<h3>招聘正式员工</h3><br/>
					<h4>岗位要求</h4><br/>
					<ul>
						<li>18-28岁，中专或同等以上学历、专业不限，持有健康证</li>
						<li>工作热情，责任心强，勤奋耐劳，有团队精神</li>
						<li>热爱“无印”风格，有严谨的工作态度</li>
					</ul>

					<h4>我们为您准备了</h4><br/>
					<ul>
						<li>完善的薪资体系</li>
					</ul>
					<p class="helper">
						<img src="assets/images/recruit-helper.png" />
					</p>
					<ul>
						<li>规范的社保缴纳<br /><small>五险一金：养老，医疗，失业，工伤，生育保险，住房公积金</small></li>
						<li>良好的福利待遇<br /><small>7-15天带薪年假，每年健康检查，员工内买，工会活动等</small></li>
						<li>大量的晋升机会<br /><small>店铺所有管理职位均为内部晋升</small></li>
						<li>广阔的发展平台<br /><small>优秀人员有机会调往上海总部工作</small></li>
					</ul>
					
					<hr />
					
					<h3>招聘兼职员工</h3><br/>
					<h4>岗位要求</h4><br/>
					<ul>
						<li>16-28岁，中专或同等以上学历、专业不限，持有健康证</li>
						<li>每周至少工作三天，每天不少于4小时</li>
						<li>在无印良品工作期间无其他兼/全职工作 </li>
					</ul>
					
					<hr />
					
					<h3>应聘方式</h3><br/>
					<p>前往无印良品官网投递简历 <a class="link" href="http://zp.muji.com.cn" target="_blank">http://zp.muji.com.cn</a></p>
				`).appendTo($scene)
			
			$('<p class="center"/>')
				.append(
					$('<button/>',{
						'class':	'nextscene',
						'html':		'下一页'
					}).on('click', function(){
						$body.trigger('scenenext')
					})
				).appendTo($recruit)
			
			return deferred.promise
		})
		
		//.done(function(){
		//	$body.trigger('scenefinish')
		//})
}