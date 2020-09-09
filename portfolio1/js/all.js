 $(function() {
     
      $(window).resize(function(){
           $('.menu').removeClass('close')
           $('#nav').hide()
          })
   
        $(window).resize(function(){
          if($(window).width() < 1180){
                $('#nav').hide()
            }
              else{
                     $('#nav').show();            
                                     }   
               })
     
     var a=1;
    $('.menu').click(function(){
      if (a == 1){
       $('#nav').stop().slideDown();  
          $(this).addClass('close')
          //만약 이미지 태그로 디자인 된 경우
          //$('img').attr('src','imges/dxjklf.gif')
       a=2}
       else{
          $('#nav').stop().slideUp();
           $(this).removeClass('close')
           
           
          a=1;
       }
        /*메뉴*/
     
   });
})
