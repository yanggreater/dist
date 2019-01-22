function ajax(method,url,fnsuccess,fnfaile,data){
	if(window.XMLHttpRequest){
		//建立ajax对象有兼容问题
		var oAjax=new XMLHttpRequest();//对于非IE6
	}
	else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//IE6
	}
	
	//连接服务器
	oAjax.open(method,url+"?t="+ Math.random(),true);



	if (method == 'GET') {
		oAjax.send();
	}
	if(method == 'POST'){
		
		oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		oAjax.send(data);
	}
	//发送请求
	

	//接受返回值
	oAjax.onreadystatechange=function(){
		if (oAjax.readyState==4) {//如果读取完成，不管是成功还是失败都是完成
			if(oAjax.status==200){//就是代表成功 状态码为200
				fnsuccess(oAjax.responseText);
			}
			else{
				if(fnfaile){
					fnfaile(oAjax.status);
				}
			}
		}
	}
}