define(['jquery','template','uploadify','region'],function($,template){
	// 调用接口获取所有的个人信息
	$.ajax({
		url: '/api/teacher/profile',
		type: 'get',
		dataType: 'json',
		success: function(data){
			// console.log(data);
			var html=template('settingsTpl',data.result);
			$('#settingsInfo').html(html);

			// 处理头像上传
			$('#upfile').uploadify({
				width: 120,
				height: 120,
				buttonText: '',
				swf: '/public/assets/uploadify/uploadify.swf',
				uploader: '/api/uploader/avatar',
				fileObjName: 'tc_avatar',
				onUploadSuccess: function(a,b){
					// console.log(b);
					var obj=JSON.parse(b);
					$('.preview img').attr('src',obj.result.path);
				}
			});

			// 处理省市县三级联动
			$('#pcd').region({
				url: '/public/assets/jquery-region/region.json',
			});
		}
	});
	
});