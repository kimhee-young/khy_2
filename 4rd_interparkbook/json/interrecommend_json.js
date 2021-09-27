     $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"여행" },
        headers:{Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"}
      })
        .done(function( msg ) {
  

		

             // 1

            $(".inter_list>li:nth-of-type(1)>.in_imgbox").append("<img src='"+msg.documents[0].thumbnail+"'/>"); 
            $(".inter_list>li:nth-of-type(1)>.in_con1").append("<h4>"+msg.documents[0].title+"</h4>");
  		    $(".inter_list>li:nth-of-type(1)>.in_con1").append("<h6>"+msg.documents[0].publisher+"</h6>");


		 	var str=msg.documents[0].contents;
            var str2=str.substring(0,100);

            $(".inter_list>li:nth-of-type(1)>.in_con2").append("<p>"+str2+"</p>");


          // 2

            $(".inter_list>li:nth-of-type(2)>.in_imgbox").append("<img src='"+msg.documents[1].thumbnail+"'/>"); 
            $(".inter_list>li:nth-of-type(2)>.in_con1").append("<h4>"+msg.documents[1].title+"</h4>");
  		    $(".inter_list>li:nth-of-type(2)>.in_con1").append("<h6>"+msg.documents[1].publisher+"</h6>");


		 	var str=msg.documents[1].contents;
            var str2=str.substring(0,100);

            $(".inter_list>li:nth-of-type(2)>.in_con2").append("<p>"+str2+"</p>");


          // 3

            $(".inter_list>li:nth-of-type(3)>.in_imgbox").append("<img src='"+msg.documents[2].thumbnail+"'/>"); 
            $(".inter_list>li:nth-of-type(3)>.in_con1").append("<h4>"+msg.documents[2].title+"</h4>");
  		    $(".inter_list>li:nth-of-type(3)>.in_con1").append("<h6>"+msg.documents[2].publisher+"</h6>");

		 	var str=msg.documents[2].contents;
            var str2=str.substring(0,100);

            $(".inter_list>li:nth-of-type(3)>.in_con2").append("<p>"+str2+"</p>");



          // 4

            $(".inter_list>li:nth-of-type(4)>.in_imgbox").append("<img src='"+msg.documents[3].thumbnail+"'/>"); 
            $(".inter_list>li:nth-of-type(4)>.in_con1").append("<h4>"+msg.documents[3].title+"</h4>");
  		    $(".inter_list>li:nth-of-type(4)>.in_con1").append("<h6>"+msg.documents[3].publisher+"</h6>");


		 	var str=msg.documents[3].contents;
            var str2=str.substring(0,100);

            $(".inter_list>li:nth-of-type(4)>.in_con2").append("<p>"+str2+"</p>");
		 
		 
		 
           // 5

            $(".inter_list>li:nth-of-type(5)>.in_imgbox").append("<img src='"+msg.documents[4].thumbnail+"'/>"); 
            $(".inter_list>li:nth-of-type(5)>.in_con1").append("<h4>"+msg.documents[4].title+"</h4>");
  		    $(".inter_list>li:nth-of-type(5)>.in_con1").append("<h6>"+msg.documents[4].publisher+"</h6>");


		 	var str=msg.documents[4].contents;
            var str2=str.substring(0,100);

            $(".inter_list>li:nth-of-type(5)>.in_con2").append("<p>"+str2+"</p>");


		 
		 });