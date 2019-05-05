"use strict";
//slider
$(document).ready(function(){
let sliderLength=document.querySelectorAll(".slide li").length;
let sliderIndex=0;
$(".left-arrow").click(
    function(){
      sliderIndex++;
       if(sliderIndex>0){
           sliderIndex=(-sliderLength)+1;
       }
       $(".slide").css({"left":`${(sliderIndex)*100}%`});
    }
)
$(".right-arrow").click(function(){
      sliderIndex--;
      if(sliderIndex===(-sliderLength)){
          sliderIndex=0;
      }
      $(".slide").css({"left":`${(sliderIndex)*100}%`});
})

});
// HOVER LI LEFT
"use strict"
$(document).ready(function(){
    let hoverLeftLi=$(".hoverLeftLi");
    hoverLeftLi.hover(
        function(){
         let a=$(this).children()[0]
         a.style.left="80%";
         a.style.opacity="0";
            setTimeout(function(){
                a.style.left="20%";
                setTimeout(function(){
                    a.style.opacity="1";
                    a.style.left="50%";
                },190)
                
            }, 190);
            
         },
         function(){}
       
    )
});
"use strict"
$(document).ready(function(){
    let toTopButton=$(".toTopButton");
    toTopButton.hover(
        function(){
         let a=$(this).children()[0]
         a.style.top="20%";
         a.style.opacity="0";
            setTimeout(function(){
                a.style.top="80%";
                setTimeout(function(){
                    a.style.opacity="1";
                    a.style.top="50%";
                },190)
                
            }, 190);
            
         },
         function(){}
       
    )


    
    toTopButton.click(function(){
        
       let body= document.querySelector("body");
       console.log(body.scrollHeight);
       let scrollh=body.scrollHeight;
       
      let d= setInterval (function(){
        
        console.log("salam");

        scrollh=scrollh-15;
          
        window.scrollTo(0,(scrollh));
        if(scrollh<0){
            clearInterval(d);
        }
        
  
       },5)
      
    })
})