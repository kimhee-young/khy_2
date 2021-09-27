$(function () {
	$(".sukind>li").mouseover(function () {
		var i = $(this).index();
		$(".sukind>li").removeClass("on");
		$(".sukind>li").eq(i).addClass("on");
		$(".gift>div").stop().hide();
		$(".gift>div").eq(i).stop().fadeIn();
		$(".gift>.sus4").stop().hide();
		$(".gift>.sus4").eq(i).stop().fadeIn();
	})

	//이벤트 기획전 효과
	function prev() {
		$('.splan>li:last').prependTo('.splan');
		$('.splan').css('margin-left', -320);
		$('.splan').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next() {
		$('.splan').stop().animate({marginLeft: -320}, 800, function () {
			$('.splan li:first').appendTo('.splan');
			$('.splan').css({
				marginLeft: 0
			});
		});
	}

	function slide() {
		$('.splan').stop().animate({marginLeft: -320}, 800, function () {
			$('.splan li:first').appendTo('.splan');
			$('.splan').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide, 8000);


	$('#giprev1').click(function () {
		prev();
	});


	$('#ginext1').click(function () {
		next();
	});
	
	
	
	//연관도서
	function prev2() {
		$('.srelation>li:last').prependTo('.srelation');
		$('.srelation').css('margin-left', -335);
		$('.srelation').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next2() {
		$('.srelation').stop().animate({marginLeft: -335}, 800, function () {
			$('.srelation li:first').appendTo('.srelation');
			$('.srelation').css({
				marginLeft: 0
			});
		});
	}

	function slide() {
		$('.srelation').stop().animate({marginLeft: -335}, 800, function () {
			$('.srelation li:first').appendTo('.srelation');
			$('.srelation').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide, 8000);


	$('#giprev2').click(function () {
		prev2();
	});


	$('#ginext2').click(function () {
		next2();
	});
	
	
	//사은품
	function prev3() {
		$('.spresent>li:last').prependTo('.spresent');
		$('.spresent').css('margin-left', -335);
		$('.spresent').stop().animate({
			marginLeft: 0
		}, 800);
	}

	function next3() {
		$('.spresent').stop().animate({marginLeft: -335}, 800, function () {
			$('.spresent li:first').appendTo('.spresent');
			$('.spresent').css({
				marginLeft: 0
			});
		});
	}

	function slide() {
		$('.spresent').stop().animate({marginLeft: -335}, 800, function () {
			$('.spresent li:first').appendTo('.spresent');
			$('.spresent').css({
				marginLeft: 0
			});
		});

	}

	setInterval(slide, 8000);


	$('#giprev3').click(function () {
		prev3();
	});


	$('#ginext3').click(function () {
		next3();
	});


});