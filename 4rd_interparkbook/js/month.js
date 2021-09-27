$(function(){

  function thisprev(){
      $("#monpage>li:last").prependTo("#monpage");
      $("#monpage").css({marginLeft:-422})
      $("#monpage").stop().animate({marginLeft:0})
  }

  function thisnext(){
    $("#monpage").stop().animate({marginLeft:-422},function(){
      $("#monpage>li:first").appendTo("#monpage");
      $("#monpage").css({marginLeft:0})
    })
  }

  function thisslide(){
    $("#monpage").stop().animate({marginLeft:-422},function(){
      $("#monpage>li:first").appendTo("#monpage");
      $("#monpage").css({marginLeft:0})
    })
  }
  
	setInterval(thisslide,9000)

  $(".thisprev").click(function(){
    thisprev()
  })

  $(".thisnext").click(function(){
    thisnext()
  })

})
