$(function(){
  $(".dbdotbox>li").click(function(){

    $(".dbdotbox>li").css({"color":"#ccc"})
    $(this).css({"color":"#3fd0ff"})

    var i=$(this).index()

      if($(this).index()==i){
        $(".db1").hide()
        $(".db1").eq(i).show()
      }
  })
})