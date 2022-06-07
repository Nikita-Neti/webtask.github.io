 $(function()
{  
    //value for animation  
    var width =500;  
    var animationSpeed = 1000;  
    var pause = 3000;  
    var currentSlide = 1;  
    //Dom element.   
    var $slider = $('#slider');  
    var $sliderAnimation = $slider.find('.slides');  
    var $slides = $sliderAnimation.find('.slide');  
   
  
    setInterval(function()
    {  
         $sliderAnimation.animate({'margin-left': "-=500"}, animationSpeed, function(){  
         currentSlide ++;  
         if(currentSlide === $slides.length)  
         {  
                $sliderAnimation.css('margin-left', 5);  
                currentSlide = 1;  
         }  
     });  
    },pause);  
 });  
