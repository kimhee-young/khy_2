 $.ajax({
     		method: "GET",
     		url: "https://dapi.kakao.com/v3/search/book?target=title",
     		data: {
     			query: "죽음"
     		},
     		headers: {
     			Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"
     		}
     	})
     	.done(function (msg) {




     		// 1
		 	$()
     		$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.bookimgbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
		 	$("#page1>.plist>li:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'/>");
		 	
		 	var str = msg.documents[0].title;
 			var str2 = str.substring(0, 13);
 			$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[0].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[0].price.toLocaleString();
 			var str6 = parseInt(msg.documents[0].price / 100)

 			$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page1>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<h6>' + msg.documents[0].publisher + ' 편집부 추천</h6>')

	 	
	 // 2

 		 	$()
     		$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.bookimgbox").append("<img src='" + msg.documents[1].thumbnail + "'/>");
		 	$("#page1>.plist>li:nth-of-type(2)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
		 
		 	var str = msg.documents[1].title;
 			var str2 = str.substring(0, 13);
 			$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[1].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[1].price.toLocaleString();
 			var str6 = parseInt(msg.documents[1].price / 100)

 			$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page1>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<h6>' + msg.documents[1].publisher + ' 편집부 추천</h6>')

	  // 3

 		 	$()
     		$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.bookimgbox").append("<img src='" + msg.documents[2].thumbnail + "'/>");
		 	$("#page1>.plist>li:nth-of-type(3)").append("<img src='" + msg.documents[2].thumbnail + "'/>");
		 
		 	var str = msg.documents[2].title;
 			var str2 = str.substring(0, 13);
 			$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[2].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[2].price.toLocaleString();
 			var str6 = parseInt(msg.documents[2].price / 100)

 			$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page1>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<h6>' + msg.documents[2].publisher + ' 편집부 추천</h6>')

	 
	  // 4

 		 	$()
     		$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.bookimgbox").append("<img src='" + msg.documents[3].thumbnail + "'/>");
		 	$("#page1>.plist>li:nth-of-type(4)").append("<img src='" + msg.documents[3].thumbnail + "'/>");

		 	var str = msg.documents[3].title;
 			var str2 = str.substring(0, 13);
 			$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[3].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[3].price.toLocaleString();
 			var str6 = parseInt(msg.documents[3].price / 100)

 			$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page1>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<h6>' + msg.documents[3].publisher + ' 편집부 추천</h6>')

	 
 });

$.ajax({
     		method: "GET",
     		url: "https://dapi.kakao.com/v3/search/book?target=title",
     		data: {
     			query: "삶"
     		},
     		headers: {
     			Authorization: "KakaoAK 832f813a8c916f2a6b36bcca7940560c"
     		}
     	})
     	.done(function (msg) {




     		// 1
		 	$()
     		$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.bookimgbox").append("<img src='" + msg.documents[0].thumbnail + "'/>");
		 	$("#page2>.plist>li:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'/>");
		 	
		 	var str = msg.documents[0].title;
 			var str2 = str.substring(0, 13);
 			$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[0].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[0].price.toLocaleString();
 			var str6 = parseInt(msg.documents[0].price / 100)

 			$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page2>.pcontent>li:nth-of-type(1)>.pbox>.booktext").append('<h6>' + msg.documents[0].publisher + ' 편집부 추천</h6>')

	 	
	 // 2

 		 	$()
     		$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.bookimgbox").append("<img src='" + msg.documents[1].thumbnail + "'/>");
		 	$("#page2>.plist>li:nth-of-type(2)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
		 
		 	var str = msg.documents[1].title;
 			var str2 = str.substring(0, 13);
 			$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[1].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[1].price.toLocaleString();
 			var str6 = parseInt(msg.documents[1].price / 100)

 			$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page2>.pcontent>li:nth-of-type(2)>.pbox>.booktext").append('<h6>' + msg.documents[1].publisher + ' 편집부 추천</h6>')

	  // 3

 		 	$()
     		$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.bookimgbox").append("<img src='" + msg.documents[2].thumbnail + "'/>");
		 	$("#page2>.plist>li:nth-of-type(3)").append("<img src='" + msg.documents[2].thumbnail + "'/>");
		 
		 	var str = msg.documents[2].title;
 			var str2 = str.substring(0, 13);
 			$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[2].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[2].price.toLocaleString();
 			var str6 = parseInt(msg.documents[2].price / 100)

 			$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page2>.pcontent>li:nth-of-type(3)>.pbox>.booktext").append('<h6>' + msg.documents[2].publisher + ' 편집부 추천</h6>')

	 
	  // 4

 		 	$()
     		$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.bookimgbox").append("<img src='" + msg.documents[3].thumbnail + "'/>");
		 	$("#page2>.plist>li:nth-of-type(4)").append("<img src='" + msg.documents[3].thumbnail + "'/>");

		 	var str = msg.documents[3].title;
 			var str2 = str.substring(0, 13);
 			$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append("<h4>" + str2 + "</h4>");
		 
		 	var str3 = msg.documents[3].contents;
 			var str4 = str3.substring(0, 60);

 			$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append("<p>" + str4 + "</p>");

 			var str5 = msg.documents[3].price.toLocaleString();
 			var str6 = parseInt(msg.documents[3].price / 100)

 			$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<span>' + str5 + "+</span>");
 			$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<h5>' + str6 + "P</h5>");

 			$("#page2>.pcontent>li:nth-of-type(4)>.pbox>.booktext").append('<h6>' + msg.documents[3].publisher + ' 편집부 추천</h6>')

	 
 });