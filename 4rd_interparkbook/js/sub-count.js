$(function () {
	$('.minus').click(function (e) {
		e.preventDefault();
		var stat = $('.number').val();
		var num = parseInt(stat, 10);
		num--;
		if (num <= 0) {
			alert('최소구매량은 1권입니다.');
			num = 1;
		}
		$('.number').val(num);
	});
	$('.plus').click(function (e) {
		e.preventDefault();
		var stat = $('.number').val();
		var num = parseInt(stat, 10);
		num++;

		if (num > 100) {
			alert('최대 구매량은 99권입니다.');
			num = 99;
		}
		$('.number').val(num);
	});
});