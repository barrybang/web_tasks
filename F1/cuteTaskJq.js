$(function(){
	var i=0;
	var clone=$(".container .pictures li").first().clone();   
	$(".container .pictures").append(clone);             /*由于要满足第四张和第一张间的滚动 在第四张后面复制粘贴一个第一张图*/
	$(".container .button li").first().addClass("on");


    /*鼠标滑动到按钮上查看图片*/
    $(".container .button li").hover(function(){
    	var index=$(this).index();
    	i=index;
    	$(".container .pictures").stop().animate({left:-index*500},800);
		$(this).addClass("on").siblings().removeClass("on");
    })                                                  
     
    /*图片自动定时轮播 3s换图*/
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
    },3000)

    /*当鼠标滑动到图片上轮播就停止 移开轮播就继续*/
    $(".container").hover(function(){
    	clearInterval(auto);
    },function(){
    	auto=setInterval(function(){
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
    },3000)
    })

	/*右滑的箭头*/
	$(".container .arrowNext").click(function(){
		i++;
		if (i==5) {
            $(".container .pictures").css({left:0});
			i=1;
		}
		$(".container .pictures").stop().animate({left:-i*500},800);
		if (i==4){
			$(".container .button li").eq(0).addClass("on").siblings().removeClass("on");
		}
        else{
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
	    }
	})
	
	/*左滑的箭头*/
	$(".container .arrowPrev").click(function(){
		i--;
		if (i==-1) {
			$(".container .pictures").css({left:-2000});
			i=3;
		}
		$(".container .pictures").stop().animate({left:-i*500},500);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
    })

    
})