$(function () {
	$("#page1>.plist>li").mouseover(function () {
		var i = $(this).index();
		$("#page1>.plist>li").removeClass("on");
		$("#page1>.plist>li").eq(i).addClass("on");
		$("#page1>.pcontent>li").stop().hide();
		$("#page1>.pcontent>li").eq(i).stop().show();
	})


	$("#page2>.plist>li").mouseover(function () {
		var i = $(this).index();
		$("#page2>.plist>li").removeClass("on");
		$("#page2>.plist>li").eq(i).addClass("on");
		$("#page2>.pcontent>li").stop().hide();
		$("#page2>.pcontent>li").eq(i).stop().show();
	})


	
});