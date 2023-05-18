$(document).ready(function(){
         
            $(".foto").fancybox({ 
                'transitionIn'      : "elastic",  
                'transitionOut'     : 'elastic',
                'onComplete': function(){setTimeout( function() {$.fancybox.close(); },5000); // 5000 = 5 secs
                  } 
            });
            
            $(".video").fancybox({  
                'autoScale'     : false,  
                'transitionIn'      : 'none',  
                'transitionOut'     : 'none',  
                'width'         : 680,  
                'height'        : 450,  
                'type'          : 'iframe'  
            });  
        
  
            $(".mapa").fancybox({  
                'autoScale'     : false,  
                'transitionIn'      : 'none',  
                'transitionOut'     : 'none',  
                'width'         : 680,  
                'height'        : 450,  
                'type'          : 'iframe'  
            });  
});