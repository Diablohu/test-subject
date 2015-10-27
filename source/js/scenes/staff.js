/* global scenes */
/* global Q */

scenes.staff = function($scene){
	var promise_chain 	= Q.fcall(function(){})
		,members = [
			{
				name: '李季',
				sub: '第4期储备干部',
				cont: [
					'毕业于深圳大学 广告学专业',
					'2012年12月入社',
					'现任深圳西区——区域店长'
				]
			},
			{
				name: '魏书哲',
				sub: '第6期储备干部',
				cont: [
					'毕业于中南财经政法大学 法学专业',
					'2014年1月入社',
					'现任总部总务人事部 招聘培训担当'
				]
			},
			{
				name: '邓伟康',
				sub: '第7期储备干部',
				cont: [
					'应用物理学专业',
					'2014年7月入社',
					'现任世界旗舰店——上海东方商厦淮海店 楼层长'
				]
			},
			{
				name: '秦荣',
				sub: '第8期储备干部',
				cont: [
					'日语专业',
					'2015年01月入社',
					'现任总部监察室 J-SOX担当'
				]
			}
		]
		,container = $('<div class="members"/>').appendTo($scene)

	$('<h2/>',{
			'html':	'员工风采'
		}).prependTo($scene)
	
	function appendMember(i){
		$('<dl/>',{
			'class':	'member member-'+(i+1) + ' animated flipInX',
			'html':		'<img src="assets/images/scene-staff-'+i+'.jpg"/>'
						+'<dt>'
							+ '<h4>' + members[i].name + '</h4>'
							+ '<span>' + members[i].sub + '</span>'
						+ '</dt>'
						+ '<dd>' + members[i].cont.join('<br />') + '</dd>'
		}).appendTo(container)
	}
	
	
	
	members.forEach(function(member, index){
		appendMember(index)
	})
	
	promise_chain = promise_chain.then(function(){
			return Q.sleep(1000 + (members.length - 1) * 250)
		}).done(function(){
			$body.trigger('scenefinish')
		})
}