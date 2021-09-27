$(function(){
    //인터파크도서
    $("#parkbox").mouseenter(function(){
        $("#park > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#park > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //confer
    $("#conferbox").mouseenter(function(){
        $("#confer > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#confer > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //feliciano
    $("#steakbox").mouseenter(function(){
        $("#steak > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#steak > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //tasty9
    $("#pofobox").mouseenter(function(){
        $("#pofo > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#pofo > li").stop().animate({marginTop:"0px"},3000)
    })
})