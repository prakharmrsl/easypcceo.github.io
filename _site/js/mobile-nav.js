
	$(function () {
		if ($(window).width() < 991) {
			$(".menu").click (function () {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(".wrapper-masthead nav").hide();
				}
				else{
					$(this).addClass('active');
					$(".wrapper-masthead nav").show();
				}
				return false;
			});
			$(".item-with-sub > a").click (function () {
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next('.sub-menu').hide();
				}
				else{
					$(this).addClass('active');
					$(this).next('.sub-menu').show();
				}
				return false;
			});
		}
	});