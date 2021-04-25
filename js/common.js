$("document").ready(function(){

	//menu open close
	$('.menu_open_img, .resp_menu img').click(function(){
		$('.menu_wrapper').css({'right': '0'});
		$('.overlay').css({'display':'block','transition': '0.7s'});
		$("body").css("overflow-y","hidden");
	});

	$('.close_img, .closemenu').click(function(){
		$('.menu_wrapper').css({'right': '-100%'});
		$('.overlay').css('display','none');
		$("body").css("overflow-y","scroll");
		
	});
	//menu icons changes
	if($(window).width() < 767) {
		//$('.menu_open_img img').attr("src","images/hamburger.png");	
		//$('.close_img img').attr("src","images/mob_close.png");	
	}else if ($(window).width() >= 768) {
		//$('.menu_open_img img').attr("src","images/open.svg");	
		//$('.close_img img').attr("src","images/close.svg");	                      
    }  
		
});
$(window).resize(function(e){
	if($(window).width() < 767) {
		//$('.menu_open_img img').attr("src","images/hamburger.png");	
		//$('.close_img img').attr("src","images/mob_close.png");			
	}else if ($(window).width() >= 768) {
		//$('.menu_open_img img').attr("src","images/open.svg");	
		//$('.close_img img').attr("src","images/close.svg");		
    }         
});
$(document).scroll(function () {
    var view_height = $(this).scrollTop();
    if (view_height > 100) {
        $('.menu_open_wrap').fadeIn();
    } else {
        $('.menu_open_wrap').fadeOut();
    }

});
