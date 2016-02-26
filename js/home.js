$(document).ready(function(){
    $(".course_img").hover(function(){
        $(this).parent().find(".img_box").fadeIn(250).mouseleave(function(){
            $(this).hide();
        }).click(function(){
            $(".loading_sign").show();
            $(this).css("cursor","-webkit-grabbing");
            link = $(this).parent().find(".course_link").attr("link");
            $(".content").load(link,function(responseTxt, statusTxt, xhr){
               if(statusTxt == "success"){setTimeout(loading_dispose,300);}
              });
              function loading_dispose (){$(".loading_sign").css("display","none");}
        });
    });
    $(".course_link").click(function(){
            $(".loading_sign").show();
            link = $(this).attr("link");
            $(".content").load(link,function(responseTxt, statusTxt, xhr){
               if(statusTxt == "success"){setTimeout(loading_dispose,500);}
              });
              function loading_dispose (){$(".loading_sign").css("display","none");}
        });
    $(".button").mousedown(function(){  
        $(this).addClass("button-click");  
    }).mouseup(function(){
         $(this).removeClass("button-click"); 
    });
});