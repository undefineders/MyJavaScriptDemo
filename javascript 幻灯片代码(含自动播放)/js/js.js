var slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// var slideIndex = 0;
// showSlides();
 
// function showSlides() {
// 	var i;
// 	//getElementsByClassName() 方法返回文档中所有指定类名的元素集合，作为 NodeList 对象。
// 	//NodeList 对象代表一个有顺序的节点列表。NodeList 对象 我们可通过节点列表中的节点索引号来访问列表中的节点(索引号由0开始)。
// 	var slides = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("dot");
// 	for (i = 0; i < slides.length; i++) {
// 	   slides[i].style.display = "none";  
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {slideIndex = 1}    
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";  
// 	dots[slideIndex-1].className += " active";
// 	setTimeout(showSlides, 2000); // 切换时间为 2 秒
// }