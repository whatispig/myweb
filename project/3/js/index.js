$(function(){
		var body = $("body");
        var changeBg = $("#changeBg");
		var changeImg = $("#changeImg");
		var close = $("#close");
		var showimg = $("#showimg");
		changeBg.bind("click",function(){
			changeImg.show(300);
		})
		close.bind("click",function(){
			changeImg.hide(300);
		})
		var img = $("#imgBox img");
		var i = img.length;
		while(i--){
			$(img[i]).bind("click",function(){
				this;
				var that = $(this).attr("src");
				body.css("background","url("+that+")");
			});
			$(img[i]).bind("mouseover",function(){
				var that = $(this).attr("src");
				showimg.css("background","url("+that+")");
				showimg.css("background-size","500px 300px")
			})
		}
})
