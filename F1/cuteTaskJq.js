$(function(){
	var i = 0;
	var clone = $(".container .pictures li").first().clone();   
	$(".container .pictures").append(clone);             /*由于要满足第四张和第一张间的滚动 在第四张后面复制粘贴一个第一张图*/
	$(".container .button li").first().addClass("on");

	
    
    /*右滑的箭头*/
  function Right(){
    i++;
		if (i == 5) {
      $(".container .pictures").css({left:0});
			i = 1;
		}
		$(".container .pictures").stop().animate({left:-i*500},800);
		if (i == 4){
			$(".container .button li").eq(0).addClass("on").siblings().removeClass("on");
		}
    else{
		  $(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
	  }
  }    
    /*左滑的箭头*/
  function Left(){
    i--;
		if (i == -1) {
			$(".container .pictures").css({left:-2000});   /*当从第一张再向左滑时 先跳转到第五张*/
			i = 3;   /*再继续动画到第四张*/
		}
		$(".container .pictures").stop().animate({left:-i*500},500);
		$(".container .button li").eq(i).addClass("on").siblings().removeClass("on");
  }

  $(".container .arrowNext").click(function(){
    Right();
  });
	
	$(".container .arrowPrev").click(function(){
		Left();
	});

    /*鼠标滑动到按钮上查看图片*/
  $(".container .button li").hover(function(){
    var index = $(this).index();
    i = index;    /*从你选择的那张图开始继续播放*/
    $(".container .pictures").stop().animate({left:-index*500},800);
		$(this).addClass("on").siblings().removeClass("on");
  })                                                  
     
    /*图片自动定时轮播 3s换图*/
  var auto=setInterval(function(){
    Right();
  },3000);

    /*当鼠标滑动到图片上轮播就停止 移开轮播就继续*/
  $(".container").hover(function(){
    clearInterval(auto);      /*鼠标移到图片上 为了舒服我就让画面停止啦*/
  },function(){
    auto = setInterval(function(){
      Right();
    },3000)
  })
})
 