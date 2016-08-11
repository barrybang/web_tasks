$(document).ready(function(){
  $(".usernameBox").click(function(){
    $(this).children("input").animate({height:35},400);
    $("label.userName").animate({fontSize:10,left:0,top:0},200);
    $("label.userName").stop().animate({fontSize:10,left:0,top:6},300);
  })
  $(".usernameBox").children("input").blur(function(){
    var usernameArr=$(this).val();
    if (usernameArr.length == 0) {
      $(this).animate({height:3},400);
      $("label.userName").stop().animate({fontSize:15,left:10,top:20},400);
    }
  })
  $(".passwordBox").click(function(){
    $(this).children("input").animate({height:35},400);
    $("label.passWord").animate({fontSize:10,left:0,top:0},200);
    $("label.passWord").stop().animate({fontSize:10,left:0,top:6},300);
  })
  $(".passwordBox").children("input").blur(function(){
    var passwordArr=$(this).val();
    if (passwordArr.length == 0) {
      $(this).animate({height:3},400);
      $("label.passWord").stop().animate({fontSize:15,left:10,top:20},400);
    }
  })
  
  $("form").submit(function(){
    var passwordArr=$(".passwordBox").children("input").val();
    var usernameArr=$(".usernameBox").children("input").val();
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