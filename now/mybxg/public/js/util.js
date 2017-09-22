define(['jquery'],function($){
	return {
		qs :function(key){
			var param = location.search.substr(1);  //把第一个字符去掉（第一个字符是？）
			// console.log(param);
			var tcId=null;
			if(param){
				var ps=param.split('&');
				$.each(ps,function(i,item){
					// console.log(item);
					var kv=item.split('=');
					if(kv[0]==key){
						tcId=kv[1];
						return false;
					}
				});
			}
			return tcId;
		}
	}
})