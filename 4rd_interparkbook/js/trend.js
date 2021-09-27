$(function () {
	var wid = $(".trslider").width();
	var i = $(".dot1 li.on").index();
	var len = $(".slides li").length;
	$(".trprev").click(function () {
		if (i == 0) {
			i = len - 1;
		} else {
			i = i - 1;
		}

		showSlide();
	});

	$(".trnext").click(function () {
		if (i == 4) {
			i = 0;
		} else {
			i = i + 1;
		}
		showSlide();
	});

	$(".dot1 li").click(function () {
		i = $(this).index();
		showSlide();
	});

	function showSlide() {
		$(".dot1 li").removeClass("on");
		$(".dot1 li").eq(i).addClass("on");
		$(".slides li").stop(true, true).fadeOut();
		$(".slides li").eq(i).stop(true, true).fadeIn();
	}


});