$(document).ready(function(){
  $(".usernameBox").click(function(){
    $(":text").animate({height:26},400);
    $("label.userName").animate({fontSize:12,left:0,top:0},200);
    $("label.userName").stop().animate({fontSize:12,left:0,top:6},300);
  })
  $(":text").blur(function(){
    var usernameArr=$(":text").val();
    if (usernameArr.length == 0) {
      $(":text").animate({height:2},400);
      $("label.userName").stop().animate({fontSize:18,left:5,top:15},400);
    }
  })
  $(".passwordBox").click(function(){
    $(":password").animate({height:26},400);
    $("label.passWord").animate({fontSize:12,left:0,top:0},200);
    $("label.passWord").stop().animate({fontSize:12,left:0,top:6},300);
  })
  $(":password").blur(function(){
    var passwordArr=$(":text").val();
    if (passwordArr.length == 0) {
      $(":password").animate({height:2},400);
      $("label.passWord").stop().animate({fontSize:18,left:5,top:15},400);
    }
  })
  
  $("form").submit(function(){
    var passwordArr=$(":password").val();
    var usernameArr=$(":text").val();
    if (usernameArr.length == 0) {
      alert("用户名不能为空");
      return false;
    }
    else if (passwordArr.length == 0) {
      alert("密码不能为空");
      return false;
    }
    else if (passwordArr.length < 6 || passwordArr.length >16) {
      alert("密码应为6~16个字符");
      return false;
    }
    else{
      return true;
    }
  })
})