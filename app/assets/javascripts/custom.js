$(document).ready(function(){
    
   var avatarOrig;
   var avatarDefault;
   
   /*var modalOriginalWidth;
   var modalOriginalHeight;
   var modalOriginalMaxHeight;
   
   var avatarOriginalHeight;*/
   
   var cropView = document.getElementById("avatar-upload");
   var uploadView =document.getElementById("avatar-upload-2")
   
   if (cropView) {
    document.getElementById("avatar-upload").onchange = function () {
        var reader = new FileReader();
    
        reader.onload = function (e) {

          var image = new Image();
          image.src = e.target.result;
          
           avatarOrig = $("#avatar_cropbox").find("div").find("img").attr("src");
          
          
          image.onload = function() {
              // get loaded data and render thumbnail.
            $("#avatar_cropbox").find("div").find("img").attr("src", e.target.result);
            
            /*
            $("#avatar_cropbox").find("div").find("img").css({
             "max-height": "650px",
             width:'auto'
            });
            
            var h = parseInt($(".jcrop-holder").find("img").naturalHeight);
            var w = parseInt($(".jcrop-holder").find("img").naturalWidth);

            $("#avatar_cropbox").css({
                //'min-height':h
                 height:h,
                width: w,
                 'max-height':'100%'
              });
            
            $(".jcrop-holder").css({
              height:h,
              width: w
            });
              $(".jcrop-tracker").css({
              height:h,
              width: w
            });
            
            $(".jcrop-holder").children().first().css({
              height:h,
              width: w,
               'max-height':'100%',
                'max-width':'100%'
            });
            
            $('#avatarModal').find('.modal-body').css({
            //  width: wModal + 30,
              height:h ,
              width: w,
              'max-height':'100%'
            });
            
            $('#avatarModal').find('.modal-dialog').css({
              width:w,
              height:h ,
              'max-height':'100%'
            });
          */
          
          };
         
        }
    
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };
   }
    
    if (uploadView) {
      document.getElementById("avatar-upload-2").onchange = function () {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        avatarDefault = $(".avatar-view").attr("src");
        var image = new Image();
        image.src = e.target.result;
        var width = image.width;
        var height = image.height;
      
        image.onload = function() {
            // get loaded data and render thumbnail.
          $(".avatar-view").attr("src", e.target.result);
          $("#btnUploadAvatar").prop('disabled', false);
         // $("#avatar-view").height(700);
        };
      }
  
      // read the image file as a data URL.
      reader.readAsDataURL(this.files[0]);
      };
    }
    
    // PARA RESETEAR EL MODAL CUANDO SE CIERRA, NOT WORKING YET

    $('.modal').on('hidden.bs.modal', function(){
      if (cropView) {
        $(this).find('form')[0].reset();
         $("#avatar_cropbox").find("div").find("img").attr("src",avatarOrig);
      }
      else {
       $(".avatar-view").attr("src",avatarDefault);
      }
      
      /* $('.modal').find('.modal-body').css({width:modalOriginalWidth,
                                 height:modalOriginalHeight, 
                                'max-height':modalOriginalMaxHeight});
                                
        $(".jcrop-holder").css({
              height:avatarOriginalHeight
        });
            
             
        $(".jcrop-holder").find("img").height(avatarOriginalHeight);
        $(".jcrop-holder").find("img").width(550);*/
       
    });
    
  $('#coverModal').on('show.bs.modal', function () {
    $(this).find('.modal-dialog').css({
      width:  parseInt($('.cover').css('width'))+ 30,
      height:'auto', 
      'max-height':'100%'
    });
  });
  
    $('#avatarModal').on('show.bs.modal', function () {
      var awidth;
      if (cropView) {
        awidth = parseInt($("#avatar_cropbox").find("div").find("img").css('width'))+ 30;
      }
      else {
        awidth = parseInt($(".avatar-view").css('width'))+ 30;
      }
      
    $(this).find('.modal-dialog').css({
      width:  awidth,
      height:'auto', 
      'max-height':'100%'
    });
  });
   
});

