$(function(){
	var i=0;
	var clone=$(".container .pictures li").first().clone();
	$(".container .pictures").append(clone);

    $(".container .button li").hover(function(){
    	var index=$(this).index();
    	i=index;
    	$(".container .pictures").stop().animate({left:-index*500},800);
		$(this).addClass("on").siblings().removeClass("on");

    	
    })
	$(".container .button li").first().addClass("on");
	$(".container .arrowNext").click(function(){
		i++;
		if (i==5) {
            $(".container .pictures").css({left:0});
			i=1;
		}
		if (i==4){
			$(".container .button li").eq(0).addClass("on").siblings().removeClass("on");
		}
		$(".container .pictures").stop().animate({left:-i*500},800);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
	})
	$(".container .arrowPrev").click(function(){
		i--;
		if (i==-1) {
			$(".container .pictures").css({left:-2000});
			i=3;
		}
		$(".container .pictures").stop().animate({left:-i*500},500);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
    })

    var auto=setInterval(function(){
    	i++;
		if (i==5) {
            $(".container .pictures").css({left:0});
			i=1;
		}
		if (i==4){
			$(".container .button li").eq(0).addClass("on").siblings().removeClass("on");
		}
		$(".container .pictures").stop().animate({left:-i*500},800);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
    },2500)

    $(".container").hover(function(){
    	clearInterval(auto);
    },function(){
    	t=setInterval(function(){
    	i++;
		if (i==5) {
            $(".container .pictures").css({left:0});
			i=1;
		}
		if (i==4){
			$(".container .button li").eq(0).addClass("on").siblings().removeClass("on");
		}
		$(".container .pictures").stop().animate({left:-i*500},800);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
    },2500)
    })

})