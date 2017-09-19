<?php
	header('content-type:text/html; charset=utf8;');  //设置编码方式
	// echo '主页内容';
	// 根据URL中的特征判断用户想要访问哪个页面
	// var_dump($_SERVER);
	// 默认目录名称
	$dir='main';
	// 默认文件名称
	$fliename ='index';
	
	// 判断路径存在，执行
	if(array_key_exists('PATH_INFO',$_SERVER)){
		// 请求路径
		$path=$_SERVER['PATH_INFO'];  // /main/index   前面有个空格是第一项，所以第一项为空
		// 截取字符串
		$str=substr($path, 1);   //main/index
		$ret=explode('/', $str);
		//var_dump($ret);     //打印结果：
							//array (size=3)
							//	  0 => string '' (length=0)
							//	  1 => string 'main' (length=4)
							//	  2 => string 'index' (length=5)
		if(count($ret)==2){
			// 两层路径
			// 覆盖默认路径
			$dir=$ret[0];
			//覆盖默认文件名称
			$filename=$ret[1];
		}else{
			//其他情况统一跳转到登录页
			$filename='login';
		}
	}
	// 嵌入子页面
	include('./views/'.$dir.'/'.$filename.'.html');

?>