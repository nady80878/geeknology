$(document).ready(function(){   
 $(".content").load("home.php");
 $(".page_link").click(function(){
  $(".loading_sign").show();
  link = $(this).attr("link");
  $(".content").load(link,function(responseTxt, statusTxt, xhr){
   if(statusTxt == "success"){setTimeout(loading_dispose,300);}
  });
  function loading_dispose (){$(".loading_sign").css("display","none");}
 });    
$(".follow-header").click(function(){
    pic = $(this).find("img").attr("pic");  
    $(this).find("img").attr("src",pic);
});
$(".follow-site").hover(function(){
    $(this).find(".follow-description").fadeIn("300").slideDown("300");
}).mouseleave(function(){
    $(this).find(".follow-description").fadeOut("300").slideUp("300");
});
});
function newPopup(name) {
    if(name == "google")
        url = "https://plus.google.com/share?url=geeknology.netii.net";
    else if(name == "facebook")
        url = "http://www.facebook.com/share.php?u=geeknology.netii.net&title=geeknology";
    else
        url = "https://www.youtube.com/channel/UCSEezYW3SADZXtGW5x3qTmg?sub_confirmation=1";    
	popupWindow = window.open(
		url,'share with '+name,'height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
}