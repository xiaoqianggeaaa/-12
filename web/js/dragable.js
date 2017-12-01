$(function(){
    $(".first").on("click",'li',function(){
        if($(this).children('ul')){
        if($(this)[0].offsetHeight>40){
                   

                 $(this).stop().animate({
                    height: 39
                })
            }else{
                   
                       $(this).stop().animate({
                    height: ($(this).children('ul').children().length+1)*40
                }).siblings().stop().animate({
                        height:39
                })
            }

        }
   })
})