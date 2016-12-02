$(function(){
		var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical', 
		onInit: function(swiper){
		swiperAnimateCache(swiper);  
		swiperAnimate(swiper); 
		},
		onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper);
		if(swiper.activeIndex == $(".swiper-slide").length - 1){
		    $(".fix").css({
		    	display:"none"
		    });
		}else{
			$(".fix").css({
		    	display:"block"
		    });
		} 
		} 
		}); 
});