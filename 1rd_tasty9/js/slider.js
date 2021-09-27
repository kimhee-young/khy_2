   var i=0;
   function slide(){
        i++;
        if (i > $('.slide li:last').index()){
           i=0;
         }
        $('.slide li').eq(i).stop().fadeIn('slow');
        $('.slide li').eq(i-1).stop().fadeOut();
     }
    setInterval(slide,3000); 