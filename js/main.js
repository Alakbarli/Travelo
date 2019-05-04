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

})