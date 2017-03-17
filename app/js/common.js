$(document).ready(function(){
	//Регистрация ошибки
	$('.registr_input#name, .registr_input#password, .registr_input#repeat_password, .registr_input#email').unbind().blur(function(){
		var id = $(this).attr('id');
		var val = $(this).val();
		var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		switch(id){
			case'name':
			if(val.length>0 && val.length<4 ||val.length==0) {
				if(val.length>0 && val.length<4)
				{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error_block').html('Имя очень короткое');

				}
				else{
					$(this).removeClass('not_error').addClass('error');
					$(this).next('.error_block').html('Поле обязательно для заполнения');
				}
			}
			else
			{
				$(this).addClass('not_error');
				$(this).next('.error_block').html('');
			}
			break;
			case'password':
			if(val.length>0 && val.length<6) 
			{
				$(this).removeClass('not_error').addClass('error');
				if(val.length==1)
				{
					$(this).next('.error_block').html('Пароль очень короткий, минимальная длинна 6 символов, вы ввели ' +val.length+ ' символ');
				}
				if(val.length>1 && val.length<5)
				{
					$(this).next('.error_block').html('Пароль очень короткий, минимальная длинна 6 символов, вы ввели ' +val.length+ ' символа');
				}
				if(val.length==5 )
				{
					$(this).next('.error_block').html('Пароль очень короткий, минимальная длинна 6 символов, вы ввели ' +val.length+ ' символов');
				}
				
			}
			else
			{
				$(this).addClass('not_error');
				$(this).next('.error_block').html('');
			}
			break;
			case'repeat_password':
			if(val != $('.registr_input#password').val())
			{
				$(this).removeClass('not_error').addClass('error');
				$(this).next('.error_block').html('Пароли не совпадают');
			}
			else
			{
				$(this).addClass('not_error');
				$(this).next('.error_block').html('');
			}
			break;
			case'email':		
			if(val.length==0 || rv_email.test(val) == false)
			{
				$(this).removeClass('not_error').addClass('error');
				if(val.length==0)
				{
					$(this).next('.error_block').html('Поле обязательно для заполнения');
				}
				else
				{
					$(this).next('.error_block').html('Поле неправильно заполненно, пример заполнения: example123@mail.ru');					
				}
			}
			else
			{
				$(this).addClass('not_error');
				$(this).next('.error_block').html('');
			}
		}

	});


	//Аккрадион
	$('.accordion_dropdown').click(function(){
		$(this).parent().children('.accardion_dropdown_wrap').slideToggle();
		$(this).toggleClass('active');
	});
	$('.input_filter').change(function(){
		if($('.input_filter').val().length>0){
			$('.filter_list').slideDown();
		}
		else{
			$('.filter_list').slideUp();
		}
	});
	//Книжныйдропдовн
	$('.book_dropdown_active').click(function(){
		$(this).toggleClass('active');
		$(this).parent().children('.book_dropdown_close').slideToggle();
	});
	//поисковик
	(function ($) {
		jQuery.expr[':'].Contains = function(a,i,m){
			return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
		};

		function filterList(list) {
			var form = $('.form_filter'),
			input = $('.input_filter');


			$(input)
			.change( function () {
				var filter = $(this).val();
				if(filter) {

					$matches = $(list).find('a:Contains(' + filter + ')').parent();
					$('li', list).not($matches).slideUp();
					$matches.slideDown();

				} else {
					$(list).find("li").slideDown();
				}
				return false;
			})
			.keyup( function () {
				$(this).change();
			});
		}

		$(function () {
			filterList($(".filter_list"));
		});
	}(jQuery));
	$('.dropdown_body_left_mnu').clone().appendTo('.left_body_mnu');
	$('.right_items_wrap').clone().appendTo('.right_tablet_wrapper');
	if($(document).width()>768){
		$('.right_avatar_wrapper').click(function(){
			$('.right_dropdown_mnu_wrapper.comp').slideToggle();
		});
	}
	
	if($(document).width()<=940 &&  $(document).width()>768){
		$('.button_icons_dropdown').click(function(){
			$('.dropdown_buttons_wrapper').slideToggle();
			
		});
	}	
	if($(document).width()<=768){
		$('.top_mnu_wrapper').css('left','-'+$(document).width()+'px');
		$('.right_dropdown_mnu_mobile').click(function(){
			if($('.left_mnu_mobile_dropdown').hasClass('active')){
				$('.left_mnu_mobile_dropdown').removeClass('active');
				$('.top_mnu_wrapper').css('left','-'+$(document).width()+'px');
				$('.right_dropdown_mnu_mobile').toggleClass('active');
				$('.right_social_wrapper').slideToggle();
			}
			else{
				$('.right_dropdown_mnu_mobile').toggleClass('active');
				$('.right_social_wrapper').slideToggle();
			}
			

		});

		$('.left_mnu_mobile_dropdown').click(function(){
			if($('.right_dropdown_mnu_mobile').hasClass('active')){
				$('.right_dropdown_mnu_mobile').removeClass('active');
				$('.right_social_wrapper').slideToggle();
				$('.left_mnu_mobile_dropdown').toggleClass('active');
				if($('.left_mnu_mobile_dropdown').hasClass('active')){
					$('.top_mnu_wrapper').css('left','0px');
				}
				else{
					$('.top_mnu_wrapper').css('left','-'+$(document).width()+'px');
				}
			}
			else{
				$('.left_mnu_mobile_dropdown').toggleClass('active');
				if($('.left_mnu_mobile_dropdown').hasClass('active')){
					$('.top_mnu_wrapper').css('left','0px');
				}
				else{
					$('.top_mnu_wrapper').css('left','-'+$(document).width()+'px');
				}
			}

			
		});
	}


});