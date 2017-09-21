define(['jquery','template'],function($,template){
	// 调用后台接口获取数据
	$.ajax({
		type: 'get',
		url: '/api/teacher',
		dataType: 'json',
		success: function(data){
			// 解析数据，渲染页面
			var teacherHtml=template('teacherTpl',{list:data.result});
			$('#teacherInfo').html(teacherHtml);

			// 启用和注销功能
			$('.eod').click(function(){
				var that=this;
				// var td=$(this).parent();
				var td=$(this).closest('td');  //closest查找离他最近的父元素
				var tcId=td.attr('data-tcid');
				var tcStatus=td.attr('data-status');
				// 调用后台接口
				$.ajax({
					type: 'post',
					url: '/api/teacher/handle',
					data: {tc_id:tcId, tc_status:tcStatus},
					dataType: 'json',
					success: function(data){
						if(data.code==200){
							td.attr('data-status',data.result.tc_status);
							if(data.result.tc_status==0){
								$(that).text('启用');
							}else{
								$(that).text('注销');
							}

						}
					}
				})
			})
		}


	});
});