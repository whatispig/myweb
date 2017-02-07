$(function(){
	$("img").lazyload();
	console.log($("img"))
	//2维码显示，隐藏
	var oWeiXin = $(".weixin"),
		oWeiXin2 = $(".weixin2"),
		Time = null
	oWeiXin.mouseenter(function(event){
		if(Time){
			clearTimeout(Time);
		}
		oWeiXin2.fadeIn();
	}).mouseleave(function(event){
		Time = setTimeout(function(){
			oWeiXin2.fadeOut();
		},200);
	});
	//子导航显示，隐藏
	var oNav = $(".bottomArea .nav ul li a"),
	    oSubNav = $(".subNav"),
		oNavLen = oNav.length
	for(var i=0;i<oNavLen-2;i++){
		$(oNav[i+1]).hover(function(){
			var index = oNav.index(this);
			$(oSubNav[index-1]).slideDown(300);
		},function(){
				var index = oNav.index(this);
				$(oSubNav[index-1]).hide();
		});
		$(oSubNav[i]).hover(function(){
			$(this).show();
		},function(){
			$(this).slideUp(200);
		});
	}
	//bannerBox 焦点图
	var oLeftArr = $(".mainBanner .leftArrow"),
		oRightArr = $(".mainBanner .rightArrow"),
		oBanner = $(".mainBanner .bannerBox .banner .middleArea"),
		oPagination = $(".mainBanner .pagination span.normol"),
		opaginationLen = oPagination.length,
		oWrap = $(".mainBanner .bannerBox .banner");
		/*var timer =null; 函数作用域,全局变量，用BUG*/
		//_left = parseInt(oBanner.css("left")),
		//num = 8, //总共8张图片(初始第一张，也是num=8)
		//**************************
		function bannerBox(offLeft,img,lBtn,rBtn,spanPag,hoverWrap,intervalTime,imgNum){
			var timer = null; //局部变量，每调用一次bannerBox函数申请一个局部变量，多次调用申请多个，相互之间不干扰
			function animate(offLeft){
				var _left =parseInt(img.css("left")); 
				img.animate({left:_left+offLeft+"px"},500);
			}
			function autoPlay(){
				timer = setInterval(function(){
					rBtn.trigger("click");
					},intervalTime);
			}
			function autoStop(){
				clearInterval(timer);
			}
			hoverWrap.hover(autoStop,autoPlay);
			autoPlay();
			spanPag.each(function(index,element){
				$(element).click(function(){
					img.css({left:-(index+1)*offLeft+"px"});
					var num = -(parseInt(img.css("left")))/offLeft;
					$(spanPag[num-1]).addClass("active").siblings().removeClass("active");
				});
			});
			lBtn.click(function(){
				if(img.is(':animated')){
					return;
				}
				if(img.css("left")==(-offLeft+"px")){ //-1000px 
					img.css({left:-offLeft*(imgNum+1)+"px"});  //-9000px
				}
				animate(offLeft);
				var num = -(parseInt(img.css("left")))/offLeft;
				$(spanPag[num-2]).addClass("active").siblings().removeClass("active");
			});
			rBtn.click(function(){
				if(img.is(':animated')){
					return;
				}
				if(img.css("left")==(-offLeft*imgNum+"px")){
					img.css({left:"0px"});
				}
				animate(-offLeft);
				var num = -(parseInt(img.css("left")))/offLeft;
				$(spanPag[num]).addClass("active").siblings().removeClass("active");
			});
			}
			bannerBox(1000,oBanner,oLeftArr,oRightArr,oPagination,oWrap,3000,8);
	var invoLeftArr = $(".inVgoue .middleArea .bannerBox .leftArrow"),
		invoRightArr = $(".inVgoue .middleArea .bannerBox .rightArrow"),
		invoBanner = $(".inVgoue .middleArea .bannerBox .banner .middleArea"),
		invoPagination = $(".inVgoue .middleArea .bannerBox .pagination span.normol"),
		invoWrap = $(".inVgoue .middleArea .bannerBox .banner");
		bannerBox(685,invoBanner,invoLeftArr,invoRightArr,invoPagination,invoWrap,3000,4);
	var shoesBagsLeftArr = $(".shoesBags .middleArea .bannerBox .leftArrow"),
		shoesBagsRightArr = $(".shoesBags .middleArea .bannerBox .rightArrow"),
		shoesBagsBanner = $(".shoesBags .middleArea .bannerBox .banner .middleArea"),
		shoesBagsPagination = $(".shoesBags .middleArea .bannerBox .pagination span.normol"),
		shoesBagsWrap = $(".shoesBags .middleArea .bannerBox .banner");
		bannerBox(652,shoesBagsBanner,shoesBagsLeftArr,shoesBagsRightArr,shoesBagsPagination,shoesBagsWrap,3000,4);
	//热门关注 按查找显示与隐藏
	var oSearchPort = $(".keyWords .searchPort"),
		oSearchCon = $(".keyWords .searchCon");
		oSearchPort.each(function(index,ele){
			$(ele).mouseover(function(){
				$(oSearchCon[index]).css({"display":"block"});
			}).mouseout(function(){
				$(oSearchCon[index]).css({"display":"none"});
			});
		});
	var discoveryLeftArr = $(".vogueDiscovery .middleArea .bannerBox .leftArrow"),
		discoveryRightArr = $(".vogueDiscovery .middleArea .bannerBox .rightArrow"),
		discoveryBanner = $(".vogueDiscovery .middleArea .bannerBox .banner .middleArea"),
		discoveryPagination = $(".vogueDiscovery .middleArea .bannerBox .pagination span.normol"),
		discoveryWrap = $(".vogueDiscovery .middleArea .bannerBox .banner");
		bannerBox(1000,discoveryBanner,discoveryLeftArr,discoveryRightArr,discoveryPagination,discoveryWrap,3000,2);
	var fashionLeftArr = $(".fashion .middleArea .bannerBox .leftArrow"),
		fashionRightArr = $(".fashion .middleArea .bannerBox .rightArrow"),
		fashionBanner = $(".fashion .middleArea .bannerBox .banner .middleArea"),
		fashionPagination = $(".fashion .middleArea .bannerBox .pagination span.normol"),
		fashionWrap = $(".fashion .middleArea .bannerBox .banner");
		bannerBox(685,fashionBanner,fashionLeftArr,fashionRightArr,fashionPagination,fashionWrap,3000,4);
	var o3DLeftArrow = $(".designers .leftArrow"),
		o3DRightArrow = $(".designers .rightArrow"),
		o3DImg = $(".designers .imgShow3D ul li img"),
		o3DImgShow = $(".designers .imgShow3D ul li"),
		oLink = $(".designers .imgShow3D .data-des"),
		arrOpacity = [],
		arrLeft = [],
		arrTop = [],
		arrZIndex = [],
		arrWidth = [],
		arrHeight = [];
		function changeImg(mark){
			o3DImg.each(function(index,ele){
				arrWidth[index]=$(this).width();
				arrHeight[index]=$(this).height();
				arrOpacity[index]=$(this).css("opacity");
			});
			o3DImgShow.each(function(index,ele){
				arrLeft[index]=$(this).css("left");
				arrTop[index]=$(this).css("top");
				arrZIndex[index]=$(this).css("z-index");
			}); 
			o3DImgShow.each(function(index,ele){
				var indes3D;
				if(mark){
					index3D=index-1;
					index3D<0?index3D=7:index3D;
				}else{
					index3D=index+1;
					index3D>7?index3D=0:index3D;
				}
				$(this).animate({left:arrLeft[index3D],top:arrTop[index3D],"z-index":arrZIndex[index3D]});
			});
			o3DImg.each(function(index,ele){
				var indes3D;
				if(mark){
					index3D=index-1;
					index3D<0?index3D=7:index3D;
				}else{
					index3D=index+1;
					index3D>7?index3D=0:index3D;
				}
				$(this).animate({width:arrWidth[index3D],height:arrHeight[index3D],opacity:arrOpacity[index3D]});
			});
		}
		var index=0;
		function getDataDes(mark){
			if(mark){
				index++;
				index>7?index=0:index;
			}else{
				index--;
				index<0?index=7:index;
			}
			var dataDes =  $(o3DImgShow[index]).attr("data-des");
			oLink.html(dataDes)
			
		}
		o3DRightArrow.click(function(){
			if(o3DImg.is(":animated"))return;
			changeImg(true);
			getDataDes(true);
		});
		o3DLeftArrow.click(function(){
			if(o3DImg.is(":animated"))return;
			changeImg(false);
			getDataDes(false);
		});
	//查看更多秀场下拉列表
	
	var oMoreShow = $(".moreShow"),
	    child = $(".showList"),
		oShowList = oMoreShow.find(child); 
		oMoreShow.hover(function(){
			oShowList.slideDown();
		},function(){
			oShowList.slideUp();
		})
    //feature banner
	var featureLeftArr = $(".features .middleArea .bannerBox .leftArrow"),
		featureRightArr = $(".features .middleArea .bannerBox .rightArrow"),
		featureBanner = $(".features .middleArea .bannerBox .banner .middleArea"),
		featurePagination = $(".features .middleArea .bannerBox .pagination span.normol"),
		featureWrap = $(".features .middleArea .bannerBox .banner");
		bannerBox(1000,featureBanner,featureLeftArr,featureRightArr,featurePagination,featureWrap,3000,4);
	//skinace banner
	var skinaceLeftArr = $(".skinace .middleArea .bannerBox .leftArrow"),
		skinaceRightArr = $(".skinace .middleArea .bannerBox .rightArrow"),
		skinaceBanner = $(".skinace .middleArea .bannerBox .banner .middleArea"),
		skinacePagination = $(".skinace .middleArea .bannerBox .pagination span.normol"),
		skinaceWrap = $(".skinace .middleArea .bannerBox .banner");
		bannerBox(1000,skinaceBanner,skinaceLeftArr,skinaceRightArr,skinacePagination,skinaceWrap,3000,2);
	//party bannner
	var partyLeftArr = $(".party .middleArea .bannerBox .leftArrow"),
		partyRightArr = $(".party .middleArea .bannerBox .rightArrow"),
		partyBanner = $(".party .middleArea .bannerBox .banner .middleArea"),
		partyPagination = $(".party .middleArea .bannerBox .pagination span.normol"),
		partyWrap = $(".party .middleArea .bannerBox .banner");
		bannerBox(685,partyBanner,partyLeftArr,partyRightArr,partyPagination,partyWrap,3000,4);
	//watch banner
	var watchLeftArr = $(".watch .middleArea .bannerBox .leftArrow"),
		watchRightArr = $(".watch .middleArea .bannerBox .rightArrow"),
		watchBanner = $(".watch .middleArea .bannerBox .banner .middleArea"),
		watchPagination = $(".watch .middleArea .bannerBox .pagination span.normol"),
		watchWrap = $(".watch .middleArea .bannerBox .banner");
		bannerBox(1000,watchBanner,watchLeftArr,watchRightArr,watchPagination,watchWrap,3000,2);
	//living baaner
	var livingLeftArr = $(".living .middleArea .bannerBox .leftArrow"),
		livingRightArr = $(".living .middleArea .bannerBox .rightArrow"),
		livingBanner = $(".living .middleArea .bannerBox .banner .middleArea"),
		livingPagination = $(".living .middleArea .bannerBox .pagination span.normol"),
		livingWrap = $(".living .middleArea .bannerBox .banner");
		bannerBox(1000,livingBanner,livingLeftArr,livingRightArr,livingPagination,livingWrap,3000,2);
		//**************************
		/*oLeftArr.click(function(){ //点击左箭头
				oBanner.stop();
				if(num==8){ //判断是否是第一张图片,也就是刚载入页面时，就点击左箭头
					       oBanner.css({left:"-8000px"}); //是第一张，就将图的left设为最后一张的值 
						   _left = -8000; //并且将初始的_left设为最后一张left的“数值”
				}
				else if(num==0){ //判断是否点击左箭头切换到了第一张图片
					 num=8; //是到了第一张,num=8
					 _left = -8000; //并且将_left设为最后一张的图片(也就是第8张的图片)的_left"数值"，为下一次做好准备
					 oBanner.css({left:"-8000px"}); //并且将图的_left重新设为最后一张的_left,这时已是最后一张
				}
				oBanner.animate({left:_left+"px"}); 
				_left += 1000; //将_left累加赋值。1000为一张图的宽度，可以传参解决
				num--; //将num自减1，判断是到了那一张
				$(oPagination[num]).addClass("active").siblings().removeClass("active");
		});
		oRightArr.click(function(){
				oBanner.stop();
				var i = 9;
				if(num==1){ //判断点击右箭头，是否到了最后一张（也就是第八张图片），这里的num=1表示到了第八张图片
					 num=8; //是到了最后一张（也就是最后一张），将num设为初始状态（也就是第一张时的num）num=8为初始状态
					 _left = 0; //并且将_left设为0,0为原始值，_left +=-1000会将left值设为初始的left：-1000px
					 oBanner.css({left:"0px"}); //并且将图的left设为0，0为原始值，_left +=-1000会将left值设为初始的left：-1000px
				}
				_left += -1000; //_left自加一张图的定位数（一张图的宽度），负值是应为方向
				oBanner.animate({left:_left+"px"}); 
				$(oPagination[i-num]).addClass("active").siblings().removeClass("active");
				num--;
				/*$(oPagination[-(num-i)]).addClass("active").siblings().removeClass("active");*/
		/*});*/
		/*oPagination.each(function(index,i){
			$(i).click(function(){
				$(this).addClass("active").siblings().removeClass("active");
				oBanner.css({left:(index+1)*_left+"px"});
			});
		});*/
		/*$.each(oPagination,function(index,i){
			$(i).click(function(){
				console.log(index)
			});
		});*/
});
