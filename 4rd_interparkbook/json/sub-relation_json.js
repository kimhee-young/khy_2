 $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"에세이" },
        headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
      })
        .done(function( msg ) {

   


          // for문 (8개)
            var divs = document.getElementsByClassName('bookname');
            
            for(var i=0; i<divs.length; i++){
 
                $(".bookname>.rimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
					
				var str=msg.documents[i].title;
				var str2=str.substring(0,10);
            	$(".bookname>.rtxt").eq(i).append("<h4>"+str2+"</h4>");
				
				$(".bookname>.rtxt").eq(i).append('<span class="sus1">'+msg.documents[i].authors+"</span>");		
				
       			var str3=msg.documents[i].contents;
				var str4=str3.substring(0,50);

				$(".bookname>.rtxt").eq(i).append("<p>"+str4+"</p>");
  
            }

        });