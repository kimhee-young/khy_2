$(function () {
	var wid = $(".how_book").width();
	var i = $(".dot2 li.on").index();
	var len = $(".how_book>ul>li").length;
	$(".howprev").click(function () {
		if (i == 0) {
			i = len - 1;
		} else {
			i = i - 1;
		}

		showSlide();
	});

	$(".hownext").click(function () {
		if (i == 3) {
			i = 0;
		} else {
			i = i + 1;
		}
		showSlide();
	});

	$(".dot2 li").click(function () {
		i = $(this).index();
		showSlide();
	});

	function showSlide() {
		$(".dot2 li").removeClass("on");
		$(".dot2 li").eq(i).addClass("on");
		$(".how_book>ul>li").stop(true, true).fadeOut();
		$(".how_book>ul>li").eq(i).stop(true, true).fadeIn();
	}


});