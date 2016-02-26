$(document).ready(function(){
    /******************************************* header slideshow*************************************************/
    var images = ["and1.png","and2.jpg","and3.jpg","and4.jpg","and5.png","and6.jpg","and7.jpg"];
    var counter = 0;
    function changePhoto(){
        if(counter == images.length-1)
            counter = 0;
        $(".course-logo").attr("src","pics/"+images[counter++]);
    }
   setInterval(changePhoto , 1000);
    
    $(".read-more").click(function(e){
        e.preventDefault();
        $(this).parent().parent().addClass("course-read-more");
        $(this).hide();
    });
    /*************************************************playlist*****************************************************/
    
    var videos = [
    "iCUV3iv9xOs"
   ,"k6ZiPqsBvEQ"
   ,"F0epWxZDlOk"
   ,"7NuTyB8Ypxc"
   ,"saxBXBb-f8c"
   ,"iMb-R6NSfmc"
   ,"Kqxq9Et4Dpg"
   ,"EsF2Sb3pf6w"
   ,"7Dwsa7aWfN8"
   ,"TI6mXu42L3U"
   ,"t3pp_fQWVWo"
   ,"4AmTiWaxwLU"
   ,"OVyMffqb32k"
   ,"qFFPrMID8FE"
   ,"IxE4NdfhnEQ"
   ,"PL3NC52V4h4"
   ,"XJJVnLj1lgA"
   ,"r7O7EMrZ9EI"
   ,"F3U9WogSVsQ"
   ,"fPNmZ94FJfI"
   ,"xsIoEEJqPMo"
   ,"0xmbVzsxiY8"
   ,"j9xt9ddFTEk"
   ,"BrEm2dcoFxo"
   ,"0HBLrQe2Ack"
   ,"MxPVNaArOSk"
   ,"EFjiuTicHns"
   ,"VbiPMsBpJ7w"
   ,"zcKt7Lj1kjo"
   ,"bvGMVmJ0mAk"
   ,"5qmbPoaMlnY"
   ,"8peN5QYpjCM"
   ,"yU0Z8sVGBx0"
   ,"jhZLfyscYgI"
   ,"QTIlNPmwISY"
   ,"OlqfAYoxK08"
   ,"a8cwNsDnCrw"
   ,"yx6VDuD5iXk"
   ,"bhNq7Y6QH0A"
   ,"0S10VOdez3g"
   ,"TFDALOr-JKg"
   ,"U0PtKHhWzDc"
   ,"7TkWocNqHU0"
   ,"VLlcGgovHNc"
   ,"zAHHj7CY5Eo"
   ,"xR9LddrVDmY"
   ,"-jO3LdBNd-o"
   ,"3yZq2Epb3FI"
   ,"8Z5dy7_u8os"
   ,"aGwa5yE43Mg"
    ];
    
    var videoNames=[
"Beginner PHP Tutorial - 1 - Introduction to PHP"
,"Beginner PHP Tutorial - 2 - Installing XAMPP Part 1"
,"Beginner PHP Tutorial - 3 - Installing XAMPP Part 2"
,"Beginner PHP Tutorial - 4 - Creating Your First PHP File"
,"Beginner PHP Tutorial - 5 - Writing Your First PHP File"
,"Beginner PHP Tutorial - 6 - The phpinfo Function"
,"Beginner PHP Tutorial - 7 - The php.ini File"
,"Beginner PHP Tutorial - 8 - Indentation"
,"Beginner PHP Tutorial - 9 - echo"
,"Beginner PHP Tutorial - 10 - print"
,"Beginner PHP Tutorial - 11 - Output HTML Using echo/print"
,"Beginner PHP Tutorial - 12 - Embedding PHP Inside HTML"
,"Beginner PHP Tutorial - 13 - comments"
,"Beginner PHP Tutorial - 14 - Error Reporting"
,"Beginner PHP Tutorial - 15 - More on Error Reporting"
,"Beginner PHP Tutorial - 16 - Variables"
,"Beginner PHP Tutorial - 17 - Concatenation"
,"Beginner PHP Tutorial - 18 - if / if else Statement"
,"Beginner PHP Tutorial - 19 - if / else if Statement"
,"Beginner PHP Tutorial - 20 - Assignment Operators"
,"Beginner PHP Tutorial - 21 - Comparison Operators"
,"Beginner PHP Tutorial - 22 - Arithmetic Operators"
,"Beginner PHP Tutorial - 23 - Logical Operators"
,"Beginner PHP Tutorial - 24 - Triple Equals"
,"Beginner PHP Tutorial - 25 - while Loop"
,"Beginner PHP Tutorial - 26 - do while Loop"
,"Beginner PHP Tutorial - 27 - for Loop"
,"Beginner PHP Tutorial - 28 - switch Statement"
,"Beginner PHP Tutorial - 29 - die and exit Functions"
,"Beginner PHP Tutorial - 44 - Expression Matching"
,"Beginner PHP Tutorial - 30 - Basic Functions"
,"Beginner PHP Tutorial - 31 - Functions with Arguments"
,"Beginner PHP Tutorial - 32 - Functions with a Return Value"
,"Beginner PHP Tutorial - 33 - Global Variables and Functions"
,"Beginner PHP Tutorial - 34 - String Functions Part 1"
,"Beginner PHP Tutorial - 35 - String Functions Part 2"
,"Beginner PHP Tutorial - 36 - String Functions Part 3"
,"Beginner PHP Tutorial - 37 - String Functions Part 4"
,"Beginner PHP Tutorial - 38 - Introduction to Arrays"
,"Beginner PHP Tutorial - 39 - Associative Arrays"
,"Beginner PHP Tutorial - 40 - Multi-dimensional Arrays"
,"Beginner PHP Tutorial - 41 - for each Statement"
,"Beginner PHP Tutorial - 42 - include and require Functions"
,"Beginner PHP Tutorial - 43 - include_once and require_once"
,"Beginner PHP Tutorial - 45 - More on Expression Matching"
,"Beginner PHP Tutorial - 46 - String Functions: String Length"
,"Beginner PHP Tutorial - 47 - String Functions: Upper / Lower Case Conversion"
,"Beginner PHP Tutorial - 48 - String Functions: String Position Part 1"
,"Beginner PHP Tutorial - 49 - String Functions: String Position Part 2"
,"Beginner PHP Tutorial - 50 - String Functions: Replacing Part of a String"
                   ];
    
    for(i=0;i<videos.length;++i){
        $(".playlist").append('<a href="#" onclick="return false;"class="video-link"><img align="left" width="100" hight="90" src="https://i.ytimg.com/vi/'+videos[i]+'/default.jpg"/><span class="video-num">'+(i+1)+'</span>- '+videoNames[i]+'</a>');
    }
    $("#video-window").attr("src","https://www.youtube.com/embed/8UEipBrZXbA");
    link = 1;
    $(".video-link").click(function(){
        link = Number($(this).find(".video-num").html());
        $("#video-window").attr("src","https://www.youtube.com/embed/"+videos[link-1]);
        $(".playlist").find("a").removeClass("video-clicked");
        $(this).addClass("video-clicked");
    });
    
    $(".video-next").mousedown(function(){
       if(link == videos.length)
            link = videos.length-1;
        $("#video-window").attr("src","https://www.youtube.com/embed/"+videos[link]);
        $(this).attr("src","pics/next-video-click.png");
         $(".playlist").find("a").removeClass("video-clicked");
         $(".playlist").find("a:eq("+(link)+")").addClass("video-clicked");
        link++;
    });
    $(".video-next").mouseup(function(){
        $(this).attr("src","pics/next-video.png");
    });
    
    
    $(".video-back").mousedown(function(){
        link--;
         if(link < 1 )
            link = 1;
        $("#video-window").attr("src","https://www.youtube.com/embed/"+videos[link-1]);
        $(this).attr("src","pics/back-video-click.png");
        $(".playlist").find("a").removeClass("video-clicked");
         $(".playlist").find("a:eq("+(link-1)+")").addClass("video-clicked");
    });
    $(".video-back").mouseup(function(){
        $(this).attr("src","pics/back-video.png");
    });
});