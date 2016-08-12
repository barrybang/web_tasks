$(document).ready(function(){
  $(".usernameBox").children("input")
  /*点击username 输入框弹开*/
    .focus(function(){
      $(this).animate({height:35},400);
      $("label.userName").animate({fontSize:10,left:0,top:0},200);
      $("label.userName").stop().animate({fontSize:10,left:0,top:6},300);
    })
  /*当点击外部区域 且输入框内没有内容时 输入框缩小*/
    .blur(function(){
      var usernameArr=$(this).val();
      if (usernameArr.length == 0) {
        $(this).animate({height:3},400);
        $("label.userName").stop().animate({fontSize:15,left:10,top:20},400);
      }
    })
  $(".passwordBox").children("input").
  /*点击password 输入框弹开*/
    focus(function(){
      $(this).animate({height:35},400);
      $("label.passWord").animate({fontSize:10,left:0,top:0},200);
      $("label.passWord").stop().animate({fontSize:10,left:0,top:6},300);
    })
  /*当点击外部区域 且输入框内没有内容时 输入框缩小*/
    .blur(function(){
      var passwordArr=$(this).val();
      if (passwordArr.length == 0) {
        $("label.passWord").animate({fontSize:15,left:10,top:20},400);
        $(this).animate({height:3},200);
      }
    })
  /*submit的数据验证*/
  $("form").submit(function(){
    var passwordArr=$(".passwordBox").children("input").val();
    var usernameArr=$(".usernameBox").children("input").val();
    var pattern1=/^[A-Za-z0-9]+$/; /*由数字和字母构成的正则表达式*/
    var pattern2=/^[a-zA-Z]/;  /*首字符为字母的正则表达式*/
    if (usernameArr.length == 0) {
      alert("用户名不能为空");
      return false;
    }
    else if (pattern2.test(passwordArr)) {
      alert("用户名应由字母开头");
      return false;
    }
    else if (pattern1.test(passwordArr)) {
      alert("用户名应由数字和字母组成");
      return false;
    }
    else if (usernameArr.length <6 || usernameArr.length >15) {
      alert("用户名长度应为6~15个字符")
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