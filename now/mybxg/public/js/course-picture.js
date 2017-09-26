define(['jquery','template','util','uploadify'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('/course/add');
	// 获取课程ID
	var csId=util.qs('cs_id');
	// 查询课程封面信息
	$.ajax({
		type: 'get',
		url: '/api/course/picture',
		data: {cs_id:csId},
		dataType: 'json',
		success: function(data){
			console.log(data);
			// 解析数据，渲染页面
			var html=template('coursepictureTpl',data.result);
			$('#coursepictureInfo').html(html);
			// 封面处理上传工作
			$('#myfile').uploadify({
				width: 80,
				height: 'auto',
				buttonText: '选择图片',
				buttonClass: 'btn btn-success btn-sm',
				itemTemplate: '<span></span>',
				swf: '/public/assets/uploadify/uploadify.swf',
				uploader: '/api/uploader/cover',
				fileObjName: 'cs_cover_original',
				formData: {cs_id: csId},
				onUploadSuccess: function(a,b){
					// console.log(b);
					var obj=JSON.parse(b);
					$('.preview img').attr('src',obj.result.path);
				}


			});
		}
	});
});