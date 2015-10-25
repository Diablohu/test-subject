/* global scenes */
/* global Q */

scenes.timeline = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,timelineEl = function(year, month, title, content){
				var el = $('<dl/>',{
						'html':		'<dt>'
										+ (year ? '<strong>' + year + '</strong>' : '')
										+ (month ? '<em>' + month + '</em>' : '')
										+ title
										+ '</dt><dd>' + content + '</dd>'
					})
				return el
			}
		,$subscene = $('<div class="timeline timeline-world"/>')
					.append($('<h2>世界的无印良品</h2>'))
					.appendTo($scene)

	// 开始异步函数链
		promise_chain
	
	// sub-scene: timeline-world
		.then(function(){
			return Q.sleep(750)
		})
		
		.then(function(){
			var $container = $('<div class="line-container animated fadeIn"/>').appendTo($subscene)
				,$line = $('<div class="line"/>').appendTo($container)
				,deferred = Q.defer()

			function containerScrolling(){
				requestAnimationFrame(function(){
					if( $container[0].scrollWidth - $container.width() <= $container.scrollLeft() + 100 ){
						deferred.resolve()
					}
					containerScrolling()
				})
			}
			containerScrolling()

			// timeline
				timelineEl(1980, null, '', '“无印良品”品牌推出')
					.addClass('up important')
					.appendTo($line)
				timelineEl(1983, null, '', '第一家门店：青山一号店')
					.addClass('down important')
					.appendTo($line)
				timelineEl(1985, null, '', '无印良品事业部成立')
					.addClass('up important')
					.appendTo($line)
				timelineEl(1989, null, '', '“株式会社良品计划”成立')
					.addClass('down important')
					.appendTo($line)
				timelineEl(1991, null, '', '海外1号店（伦敦）开设')
					.addClass('up important')
					.appendTo($line)
				timelineEl(1993, null, '', '无印良品LaLaPort')
					.addClass('down important')
					.appendTo($line)
				timelineEl(1994, null, '', '欧洲子公司成立')
					.addClass('up important')
					.appendTo($line)
				timelineEl(1996, null, '', '推出“MUJI Flower”花良品一号店')
					.addClass('down important')
					.appendTo($line)
				timelineEl(2000, null, '', '东京证券交易所上市')
					.addClass('up important')
					.appendTo($line)
				timelineEl(2003, null, '', '进入韩国市场')
					.addClass('down important')
					.appendTo($line)
				timelineEl(2005, null, '', '德国IF设计奖专案部门5项金奖')
					.addClass('up important')
					.appendTo($line)
				timelineEl(2006, null, '', '第一届“MUJI AWARD”举办')
					.addClass('down important')
					.appendTo($line)
				timelineEl(2008, null, '', '新都市型旗舰店推出')
					.addClass('up important')
					.appendTo($line)
				timelineEl(2010, null, '', 'MUJI成立30周年')
					.addClass('down important')
					.appendTo($line)
				timelineEl(2011, null, '', '青山1号店改装为“Found MUJI”')
					.addClass('up important')
					.appendTo($line)
			
			return deferred.promise
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}

scenes.timeline2 = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,timelineEl = function(year, month, title, content){
				var el = $('<dl/>',{
						'html':		'<dt>'
										+ (year ? '<strong>' + year + '</strong>' : '')
										+ (month ? '<em>' + month + '</em>' : '')
										+ title
										+ '</dt><dd>' + content + '</dd>'
					})
				return el
			}
		,$china = $('<div class="timeline timeline-china"/>')
				.append($('<h2>无印良品在中国</h2>'))
				.appendTo($scene)

	// 开始异步函数链
		promise_chain
	
	// sub-scene: timeline-china
		.then(function(){
			return Q.sleep(750)
		})
			
		.then(function(){
			var deferred = Q.defer()
				,$map = $('<div class="map animated fadeIn"/>').appendTo($china)
				,$container = $('<div class="line-container animated fadeIn"/>').appendTo($china)
				,$line = $('<div class="line"/>').appendTo($container)

			function containerScrolling(){
				requestAnimationFrame(function(){
					if( $container[0].scrollWidth - $container.width() <= $container.scrollLeft() + 100 ){
						deferred.resolve()
					}
					containerScrolling()
				})
			}
			containerScrolling()
			
			// map nodes
				for( let i=1; i<10; i++){
					$('<div class="node node-'+i+' animated fadeIn"/>').appendTo($map)
				}
			
			// timeline
				timelineEl(2005, '5月', '', '（株）良品计画在中国上海设立全资子公司——无印良品（上海）商业有限公司。')
					.addClass('up important')
					.appendTo($line)
				timelineEl(null, '7月', '中国第1家', '【上海】无印良品南京西路店正式开业，总商品种类1570种（生活杂货1450种；服饰&箱包100种；食品20种）。')
					.addClass('down')
					.appendTo($line)
				timelineEl(2008, '1月', '', '（株）良品计画在中国北京设立无印良品（北京）商业有限公司')
					.addClass('up important')
					.appendTo($line)
				timelineEl(null, '3月', '中国第2家', '【北京】无印良品西单大悦城店正式开业，总商品种类2400种（生活杂货1600种；服装服饰、箱包800种）。<br /><br />【上海】上海正大广场店开业。<br /><br />2008年底5家（上海、北京、南京）')
					.addClass('down long')
					.appendTo($line)
				timelineEl(2009, '7月', '', '【沈阳】中街大悦城店开业首<br />次入驻东北地区。<br /><br />2009年底5家，共10家。')
					.addClass('up important')
					.appendTo($line)
				timelineEl(2010, '5月', '', '【杭州】中国第一届“无印良品的理由”展示会在万象城举行。举办的“无印良品的理由”演讲会，由深泽直人、金井政明主讲。<br /><br />【北京】在中国美术学院小剧院举办的“无印良品的可能性”演讲及座谈会讲师——张永和、原研哉。')
					.addClass('up up2 important long')
					.appendTo($line)
				timelineEl(null, '12月', '', '【上海】中国第二届“无印良品”展示会。在上海大悦城10F金逸影院举办180人的“无印良品展示会”纪念演讲会。讲师为原研哉、深泽直人等。<br /><br />2010年底15家，共25家（首次入驻杭州、天津、青岛、宁波、苏州、深圳、成都、厦门、大连）。')
					.addClass('down long')
					.appendTo($line)
				timelineEl(2011, '11月', '', '无印良品（北京）商业有限公司的所有下属店铺转让交由无印良品（上海）商业有限公司统一经营管理。<br /><br />2011年底13家，共38家（首次入驻重庆、济南、武汉、南通、福州）。')
					.addClass('down important')
					.appendTo($line)
				timelineEl(2012, null, '', '2012年底28家，共66家（首次入驻昆明、常州、石家庄、合肥、郑州、南宁、长沙、泉州、西安、佛山）。')
					.addClass('up important')
					.appendTo($line)
				timelineEl(2013, '1月', '杭州利星名品店开业', '【杭州】中国首家大型店开业，引入ATELIER MUJI、Found MUJI、REAL FURNITURE、MUJI Labo、首次引进童装。')
					.addClass('up up2 important')
					.appendTo($line)
				timelineEl(null, '4月', '', '中国无印良品官方网络商城正式运营。')
					.addClass('down')
					.appendTo($line)
				timelineEl(null, '6月', '', '无印良品MUJI AWARD04设计大赛（世界第四届，中国首次承办）暨旗舰店开幕新闻发布会生活良品研究所中文网站正式上线，11月中文版良品研究所IDEA PARK上线。')
					.addClass('up up2')
					.appendTo($line)
				timelineEl(null, '7月', '', '【上海】中国首家高感度店型上海国金中心店开业。')
					.addClass('down')
					.appendTo($line)
				timelineEl(null, '8月', '上海环贸广场店开业', '【上海】中国首家旗舰店，引入ATELIER MUJI、Found MUJI、REAL FURNITURE、MUJI Labo、童装。')
					.addClass('up')
					.appendTo($line)
				timelineEl(null, '9月', '', '【上海】环贸广场店物的八分目展暨深泽直人TALK SHOW。<br /><br />2013年开设新店38家，店铺数共达100家（首次入驻温州、广州、无锡、保定、烟台）。')
					.addClass('up2')
					.appendTo($line)
				timelineEl(2014, '4月', '', '举办MUJI AWARD 04 in China设计大赛颁奖典礼。共计49个国家，4824件作品参赛，创历届最高。本届评选出金奖2件，银奖空缺，铜奖5件，评审员推荐奖10件，入选作品18件。合计35件作品于2014年4月27日起，在上海、杭州、太原、台北、香港、东京等地巡回展出。')
					.addClass('down important long')
					.appendTo($line)
				timelineEl(null, '6月', '入驻T-MALL天猫', '成功携手中国最大电商平台T-MALL，无印良品天猫旗舰店正式运营。首日销售额达137万元。')
					.addClass('up')
					.appendTo($line)
				timelineEl(null, '9月', '', '【上海】南岸艺术中心举办Found MUJI CHINA展示会，开展当天（9月25日），成功举办深泽直人特别演讲会。')
					.addClass('down')
					.appendTo($line)
				timelineEl(null, '12月', '成都世界旗舰店', '【成都】远洋太古里世界旗舰店总面积3016平方米，为地下1层地上3层的多楼层店铺，属中国首家。Cafe&Meal MUJI中国1号店也同时盛大开业。<br /><br />2014年新开店铺30家，店铺数达128家（首次入驻太原、贵阳、呼和浩特、芜湖等城市）。')
					.addClass('down long')
					.appendTo($line)
				timelineEl(2015, '5月', '无印良品中国10周年', 'MUJI passport上线<br /><br />通过这款APP，消费者可以累计积分，感受到全新的购物体验。')
					.addClass('up important long')
					.appendTo($line)
			
			// get timeline width, make transition
				//$line.css('margin-left', 'calc(-' + $line.outerWidth() + 'px + 100%)')
				$line.css('margin-left', (0 - $line.outerWidth() + $china.width()) + 'px')

			return deferred.promise
		})
		
		.done(function(){
			$body.trigger('scenefinish')
		})
}