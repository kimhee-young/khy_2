$(function(){
	$(".miniimg>li").mouseover(function () {
		var i = $(this).index();
		$(".miniimg>li").removeClass("on");
		$(".miniimg>li").eq(i).addClass("on");
	})
	
	$(".miniimg li img").mouseover(function(){
		$(".mainimg img").attr("src", $(this).attr("src"));
	});



});