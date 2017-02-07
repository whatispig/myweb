var show = $(".show");
show.hover(function(){
	$(this).grumble({
		text: '5折优惠', 
		angle: 20, 
		distance: 100, 
		showAfter: 500
	})
});
	var $body = $("body"),
	    $window = $(window),
	    $backTop = $(".backTop");
		$window.scroll(function(){
			var h = $body.scrollTop();
			if(h>800){
				$backTop.show();
			}else{
				$backTop.hide();
			}
		});
		$backTop.click(function(){
			$body.animate({scrollTop:"0px"},100);
		});
