$(document).ready(function(){
    
   /*var avatarOrig;
   var avatarDefault;
   
   var modalOriginalWidth;
   var modalOriginalHeight;
   var modalOriginalMaxHeight;
   
   var avatarOriginalHeight;*/
   
   var cropView = document.getElementById("avatar-upload");
   var UpdateNewAvatarView = document.getElementById("avatar-upload-2");
   
   if (cropView) {
    document.getElementById("avatar-upload").onchange = function () {
        var reader = new FileReader();
    
        reader.onload = function (e) {
          //avatarOrig = $("#avatar_cropbox").find("div").find("img").attr("src");
          var image = new Image();
          image.src = e.target.result;
         
          
          /*modalOriginalWidth = $('.modal-body').css('width');
          modalOriginalHeight = $('.modal-body').css('height');
          modalOriginalMaxHeight = $('.modal-body').css('max-height');
          
           avatarOriginalHeight = $(".jcrop-holder").css('height');*/
          
          image.onload = function() {
              // get loaded data and render thumbnail.
            $("#avatar_cropbox").find("div").find("img").attr("src", e.target.result);
            $("#avatar_cropbox").find("div").find("img").height('auto');
            $("#avatar_cropbox").find("div").find("img").width(550);
           
            
            var h = $(".jcrop-holder").find("img").css('height');
            
          
            //var h = $("#avatar_cropbox").find("div").find("img").css('height');
            
            //var h = $("#avatar_cropbox").css('height');
          $("#avatar_cropbox").css({
              'min-height':h
            });
            
            $(".jcrop-holder").css({
              height:h
            });
              $(".jcrop-tracker").css({
              height:h
            });
           
           
           /* $("#avatar_cropbox").css({
              height:h
            });*/
            
            $(".jcrop-holder").children().first().css({
              height:h,
               'max-height':'100%',
                'max-width':'100%'
            });
            
           
            $('.modal').find('.modal-body').css({width:550,
            height:'auto' ,
           // 'min-height':h,
                                'max-height':'100%'});
         
            };
        
        }
    
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };
   }
    
    if (UpdateNewAvatarView) {
      document.getElementById("avatar-upload-2").onchange = function () {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        avatarDefault = $("#avatar-view").attr("src");
        var image = new Image();
        image.src = e.target.result;
        var width = image.width;
        var height = image.height;
      
        image.onload = function() {
            // get loaded data and render thumbnail.
          $("#avatar-view").attr("src", e.target.result);
          $("#avatar-view").height(700);
        };
      }
  
      // read the image file as a data URL.
      reader.readAsDataURL(this.files[0]);
      };
    }
    
    // PARA RESETEAR EL MODAL CUANDO SE CIERRA, NOT WORKING YET

  /*  $('.modal').on('hidden.bs.modal', function(){
      $(this).find('form')[0].reset();
    
        $("#avatar-view").attr("src",avatarDefault);
        $("#avatar_cropbox").find("div").find("img").attr("src",avatarOrig);
      
       $('.modal').find('.modal-body').css({width:modalOriginalWidth,
                                 height:modalOriginalHeight, 
                                'max-height':modalOriginalMaxHeight});
                                
        $(".jcrop-holder").css({
              height:avatarOriginalHeight
        });
            
             
        $(".jcrop-holder").find("img").height(avatarOriginalHeight);
        $(".jcrop-holder").find("img").width(550);
       
    });*/
});