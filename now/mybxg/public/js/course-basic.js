define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('/course/add');
	// 获取课程id
	var csId=util.qs('cs_id');
	// 操作标志位
	var flag=util.qs('flag');
	// 根据课程id查询详细信息
	$.ajax({
		type: 'get',
		url: '/api/course/basic',
		data: { cs_id:csId},
		dataType: 'json',
		succss:function(data){
			if(flag){
				data.result.operate='编辑课程';
			}else{
				data.result.operate='添加课程';
			}
			// console.log(data);
			// 解析数据填充页面
			var html=template('coursebasicTpl',data.result);
			$('#coursebasicInfo').html(html);
		}
	});

});