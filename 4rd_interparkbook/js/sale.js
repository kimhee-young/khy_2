$(function() {
      $(".salemenu>li").mouseover(function () {
		var i = $(this).index();
		$(".salemenu>li").removeClass("on");
		$(".salemenu>li").eq(i).addClass("on");
		$(".kind>li").stop().hide();
		$(".kind>li").eq(i).stop().show();
	})

        });