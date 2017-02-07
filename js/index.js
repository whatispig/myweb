$(function(){
	var $wraning= $(".wraning");
		setTimeout(function(){
		 $wraning.css("display","none");
		},3000);
	var $aboutMe = $(".aboutMe"),
	    $about = $(".about"),
	    $work = $(".work"),
		$workshow = $(".workShow"),
		$body = $("body");
	//个人简介 案例展示 快速定位
	function scroll(scrolled){
		var H = Math.floor(scrolled.offset().top*0.9);
		$body.animate({scrollTop:H},200);
	}
	$aboutMe.click(function(){
		scroll($about);
	});
	$work.click(function(){
		scroll($workshow);
	});
	//backTop 返回顶部
	var $window = $(window),
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
	//work mask 案例展示遮罩显示影藏
	var $mask = $(".mask"),
	    $show = $(".show");
	$mask.each(function(i,e){
		$(e).mouseenter(function(){
			$(this).stop().animate({top:"-200px"},300);
			
		}).mouseleave(function(){
			$(this).stop().animate({top:"0px"},300);
		});
	});
	$show.each(function(i,e){
		$(e).mouseleave(function(){
			$($mask[i]).stop().animate({top:"0px"},300);
		}).mouseover(function(){
			$($mask[i]).stop().animate({top:"-200px"},300);
		});
	});
});
