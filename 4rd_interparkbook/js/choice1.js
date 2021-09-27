      $(function(){
        $("#btn2").click(function(){
          if($("#page2").css("display")=="none"){
            $("#page1").hide()
            $("#page2").show()
          } else {
            $("#page1").show()
            $("#page2").hide()
          }
            if($(".two").css("display")=="none"){
              $(".one").hide()
              $(".two").show()
            } else if ($(".one").css("display")=="none"){
              $(".one").show()
              $(".two").hide()
            }
        })
        $("#btn1").click(function(){
          if($("#page2").css("display")=="none"){
            $("#page1").hide()
            $("#page2").show()
          } else {
            $("#page1").show()
            $("#page2").hide()
          }
            if($(".two").css("display")=="none"){
              $(".one").hide()
              $(".two").show()
            } else if ($(".one").css("display")=="none"){
              $(".one").show()
              $(".two").hide()
            }
        })
      })