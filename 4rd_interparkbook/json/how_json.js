   $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data:{ query:"파리" },
      headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
    })
    .done(function( msg ) {



      var boxs = document.getElementsByClassName('how1');


          for(var i=0; i<boxs.length; i++){

            $(".how_book>ul>.how1").eq(i).append('<div class="bookimg">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</div>");
			  
			var str=msg.documents[i].contents;
            var str2=str.substring(0,15);
            $(".how_book>ul>.how1").eq(i).append("<p>"+str2+"</p>");
            
			
			var str3=msg.documents[i].title;
            var str4=str3.substring(0,13);
            $(".how_book>ul>.how1").eq(i).append("<h4>"+str4+"</h4>");

          }

    });