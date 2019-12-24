/* limpa o display */ 
//function btn(){
	// document.getElementById("clear").addEventListener("click",function(){
	// //addEventListener() 方法用于向指定元素添加事件句柄。 监听
	// //提示： 使用 removeEventListener() 方法来移除 addEventListener() 方法添加的事件句柄。
	// 	document.getElementById("display").value = "";
	// 	//value 属性可设置或返回密码域的默认值。
	// 	//出于安全考虑，一些浏览器可能阻止 JavaScript 代码读取 value 属性。
	// });
	
	document.getElementById("clear").onmouseup = function(){
		document.getElementById("display").value = "";
	}
//};
/* recebe os valores */
function get(value) {
	document.getElementById("display").value += value; 
} 

/* calcula */
function calculates() {
	var result = 0;
	result = document.getElementById("display").value;
	// alert(result)
	try{
		document.getElementById("display").value = eval(result);
	}catch(e){
		document.getElementById("display").value = "";
		//TODO handle the exception
	}finally {
		console.log(22222)
	}
	
	//eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。
};

