$(document).ready(function(){
  $(".usernameBox").children("input")
  /*点击username 输入框弹开*/
    .focus(function(){
      $(this).siblings("label").stop().addClass("labelStart");
    })
  /*当点击外部区域 且输入框内没有内容时 输入框缩小*/
    .blur(function(){
      var usernameArr=$(this).val();
      if (usernameArr.length == 0) {
        $(this).siblings("label").css({fontSize:10,left:0,top:6});
        $(this).siblings("label").removeClass("labelStart");
        $(this).siblings("label").animate({fontSize:15,left:10,top:20},400);
        $(this).css({height:35});
        $(this).stop().animate({height:3},400);
      }
    })
  $(".passwordBox").children("input")
    .focus(function(){
      $(this).siblings("label").stop().addClass("labelStart");
      })
  /*当点击外部区域 且输入框内没有内容时 输入框缩小*/
    .blur(function(){
      var passwordArr=$(this).val();
      if (passwordArr.length == 0) {
        $(this).siblings("label").css({fontSize:10,left:0,top:6});
        $(this).siblings("label").removeClass("labelStart");
        $(this).css({height:35});
        $(this).siblings("label").animate({fontSize:15,left:10,top:20},400);
        $(this).animate({height:3},400);
      }
    })
  /*submit的数据验证*/
  $("form").submit(function(){
    var passwordArr=$(".passwordBox").children("input").val();
    var usernameArr=$(".usernameBox").children("input").val();
    var lengthtest=/^[A-Za-z0-9]+$/; /*由数字和字母构成的正则表达式*/
    var firsttest=/^[a-z]+$/;  /*首字符为小写字母的正则表达式*/
    if (usernameArr.length == 0) {
      alert("用户名不能为空");
      return false;
    }
    else if (firsttest.test(passwordArr) && lengthtest.test(passwordArr && usernameArr.length <6 || usernameArr.length >15)) {
      alert("用户名应由小写字母开头且由6~15位字母及数字组成");
      return false;
    }
    else if (passwordArr.length == 0) {
      alert("密码不能为空");
      return false;
    }
    else if (passwordArr.length < 6 || passwordArr.length >16) {
      alert("密码长度应为6~16个字符");
      return false;
    }
    else {
      return true;
    }
  })
})