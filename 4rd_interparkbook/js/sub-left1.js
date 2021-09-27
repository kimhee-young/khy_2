$(function(){
	
	
	//left1
  var $slider = $('.left1>ul'),
      $firstSlide = $slider.find('li').first()
      .stop(true).animate({'opacity':1},200); 
	
  function PrevSlide(){ 
    stopSlide();startSlide(); 
    var $lastSlide = $slider.find('li').last()
    .prependTo($slider);   
    $secondSlide = $slider.find('li').eq(1)
    .stop(true).animate({'opacity':0},400); 
    $firstSlide = $slider.find('li').first()
    .stop(true).animate({'opacity':1},400);
  }
  
  function NextSlide(){ 
    stopSlide();startSlide(); 
    $firstSlide = $slider.find('li').first()
    .appendTo($slider); 
    var $lastSlide = $slider.find('li').last()
    .stop(true).animate({'opacity':0},400); 
    $firstSlide = $slider.find('li').first()
    .stop(true).animate({'opacity':1},400);
  }
  
  $('.leftnext').on('click', function(){
    NextSlide();
  });
  $('.leftprev').on('click', function(){
    PrevSlide();
  });

  startSlide(); 
  
  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 5000); 
  }

  function stopSlide() {
    clearInterval(theInterval);
  }
  
  $('.left1').hover(function(){
    stopSlide();
  }, function (){
    startSlide();
  });
	
	
	
	
	//left2
	
	 var i=0;

     function slide2(){
        i++;
        if (i > $('.left2>ul>li:last').index()){
           i=0;
         }
        $('.left2>ul>li').eq(i).stop().fadeIn('slow');
        $('.left2>ul>li').eq(i-1).stop().fadeOut();
     }

     setInterval(slide2,7000); 


	
	
	//left3
	
	 var j=0;

     function slide3(){
        j++;
        if (j > $('.left3>ul>li:last').index()){
           j=0;
         }
        $('.left3>ul>li').eq(j).stop().fadeIn('slow');
        $('.left3>ul>li').eq(j-1).stop().fadeOut();
     }

     setInterval(slide3,5000); 
	
	
	
});