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
		data: {cs_id : csId},
		dataType: 'json',
		success:function(data){
			if(flag){
				data.result.operate='编辑课程';
			}else{
				data.result.operate='添加课程';
			}
			// console.log(data);
			// 解析数据填充页面
			var html=template('coursebasicTpl',data.result);
			$('#coursebasicInfo').html(html);

			// 处理二级分类的下拉联动操作
			$('#firstType').change(function(){
				// 获取一级分类ID
				var pid=$(this).val();
				// 根据一级分类的ID查询左右的二级分类数据
				$.ajax({
					type: 'get',
					url: '/api/category/child',
					data: {cg_id : pid},
					dataType: 'json',
					success: function(data){
						var tpl = '<option value="">请选择二级分类...</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                        var html = template.render(tpl,{list:data.result});
                        console.log(html);
                        $('#secondType').html(html);
					}
				})
			})
		}
	});

});