   $(function () {
     
           
       $('.bxslider').bxSlider({
           captions: false,
           //slideWidth:600,  //수정
           auto:true,
           autoControls: false,
           stopAutoOnclick: false,
           speed: 800,
           pager:false,
           controls:false
           
          //slideheight:9000
       });
       
         $('.bxslider > div').each(function(){   //1단계           
             //5단계
            if($(window).width() < 740){
                //alert();
                 var img = $(this).find('img');  //2단계  find ==> 선택자를 찾는 명령
                 var img_pc = img.attr('src');    //3단계  
                 var img_mo = img_pc.replace('imgs','m_img') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src',img_mo);
                
                
            }else{
                 var img = $(this).find('img');  //2단계  find ==> 선택자를 찾는 명령
                 var img_mo = img.attr('src');    //3단계  
                 var img_pc = img_mo.replace('m_img','imgs') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src',img_pc);
                
                
            }
    })  
       
       /*
       if($(window).width() < 740){
              //740미만의 실행문} 
       else if ($(window).width() < 1040) {
              //740이상~1040미만의 실행문  } 
        else{//그외 = 1040이상 }
       
       */
       
    
       
    $(window).resize(function(){
           $('.bxslider > div').each(function(){   //1단계
            if($(window).width() < 740){
                //alert();
                 var img = $(this).find('img');  //2단계  find ==> 선택자를 찾는 명령
                 var img_pc = img.attr('src');    //3단계  
                 var img_mo = img_pc.replace('imgs','m_img') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src',img_mo);
                 
                
                
            }else{
                 var img = $(this).find('img');  //2단계  find ==> 선택자를 찾는 명령
                 var img_mo = img.attr('src');    //3단계  
                 var img_pc = img_mo.replace('m_img','imgs') //4단계   relapce(a,b) ==> a를 b로 대체
                img.attr('src',img_pc);
                 ;
      
                a = 1;
                
            }
            
      })
        }) /*740이하*/
       
   })