$.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"세일즈",size:50 },
      headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
    })
    .done(function( msg ) {

          var boxs = document.getElementsByClassName('sale1');

          for(var i=0; i<boxs.length; i++){

            $(".sale1>.saimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

			var str3=msg.documents[i].title;
            var str4=str3.substring(0,10);
            $(".sale1").eq(i).append("<h5>"+str4+"</h5>");

			  
			var str1=msg.documents[i].price.toLocaleString()
 			var str2=msg.documents[i].sale_price.toLocaleString()
			
            $(".sale1").eq(i).append("<p>정가 "+str1+"원</p>");
            $(".sale1").eq(i).append("<h6>"+str2+"원</h6>");

      }
  });


$.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"자신",size:50 },
      headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
    })
    .done(function( msg ) {

          var boxs = document.getElementsByClassName('sale2');

          for(var i=0; i<boxs.length; i++){

            $(".sale2>.saimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

			var str3=msg.documents[i].title;
            var str4=str3.substring(0,10);
            $(".sale2").eq(i).append("<h5>"+str4+"</h5>");

			  
			var str1=msg.documents[i].price.toLocaleString()
 			var str2=msg.documents[i].sale_price.toLocaleString()
			
            $(".sale2").eq(i).append("<p>정가 "+str1+"원</p>");
            $(".sale2").eq(i).append("<h6>"+str2+"원</h6>");

      }
  });


$.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"정원",size:50 },
      headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
    })
    .done(function( msg ) {

          var boxs = document.getElementsByClassName('sale3');

          for(var i=0; i<boxs.length; i++){

            $(".sale3>.saimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

			var str3=msg.documents[i].title;
            var str4=str3.substring(0,10);
            $(".sale3").eq(i).append("<h5>"+str4+"</h5>");

			  
			var str1=msg.documents[i].price.toLocaleString()
 			var str2=msg.documents[i].sale_price.toLocaleString()
			
            $(".sale3").eq(i).append("<p>정가 "+str1+"원</p>");
            $(".sale3").eq(i).append("<h6>"+str2+"원</h6>");

      }
  });

$.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query:"전집",size:50 },
      headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
    })
    .done(function( msg ) {

          var boxs = document.getElementsByClassName('sale4');

          for(var i=0; i<boxs.length; i++){

            $(".sale4>.saimg").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");

			var str3=msg.documents[i].title;
            var str4=str3.substring(0,10);
            $(".sale4").eq(i).append("<h5>"+str4+"</h5>");

			  
			var str1=msg.documents[i].price.toLocaleString()
 			var str2=msg.documents[i].sale_price.toLocaleString()
			
            $(".sale4").eq(i).append("<p>정가 "+str1+"원</p>");
            $(".sale4").eq(i).append("<h6>"+str2+"원</h6>");

      }
  });