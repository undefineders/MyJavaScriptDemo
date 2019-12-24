function is_weixn(){  
	var ua = navigator.userAgent.toLowerCase();  
	//Navigator 对象包含有关浏览器的信息。  注释：没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象。
	//userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。
	//toLowerCase() 方法用于把字符串转换为小写。
	if(ua.match(/MicroMessenger/i)=="micromessenger") { 
	//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。 
		return true;  
	} else {  
		return false;  
	}  
}  

if( is_weixn() ) {
    document.write("微信浏览器")
} else {
    document.write("其他浏览器")
}