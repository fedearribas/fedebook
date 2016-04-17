$(document).ready(function(){
    
   var avatarOrig;
   var avatarDefault;
   var coverDefault;
   
   var cropAvatarView = document.getElementById("avatar-upload");
   var uploadAvatarView =document.getElementById("avatar-upload-2");
   var uploadCoverView = document.getElementById("cover-upload");
   
   if (cropAvatarView) {
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
    
    // UPLOAD AVATAR IMAGE
    
    if (uploadAvatarView) {
      document.getElementById("avatar-upload-2").onchange = function () {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        avatarDefault = $(".avatar-view").attr("src");
        var image = new Image();
        image.src = e.target.result;
      
        image.onload = function() {
          $(".avatar-view").attr("src", e.target.result);
          $("#btnUploadAvatar").prop('disabled', false);
           $(".avatar-view").css({
             "max-height": "650px",
             width:'auto'
            });
          $('#avatarModal').find('.modal-dialog').css({
            width:  parseInt($(".avatar-view").css('width'))+ 30,
            height:'auto', 
            'max-height':'100%'
          });
        };
      }
      reader.readAsDataURL(this.files[0]);
      };
    }
    
    
    // UPLOAD COVER
    if (uploadCoverView) {
      document.getElementById("cover-upload").onchange = function () {
        var reader = new FileReader();
    
        reader.onload = function (e) {
          coverDefault = $(".cover").attr("src");
          var image = new Image();
          image.src = e.target.result;
        
          image.onload = function() {
            $(".cover").attr("src", e.target.result);
            $("#btnUploadCover").prop('disabled', false);
             $(".cover").css({
               "max-height": "650px",
               width:'auto'
              });
            $('#coverModal').find('.modal-dialog').css({
              width:  parseInt($(".cover").css('width'))+ 30,
              height:'auto', 
              'max-height':'100%'
            });
          };
        }
        reader.readAsDataURL(this.files[0]);
        };
    }
    // RESET MODAL ON CLOSE

    $('.modal').on('hidden.bs.modal', function(){
      if (cropAvatarView) {
        $(this).find('form')[0].reset();
         $("#avatar_cropbox").find("div").find("img").attr("src",avatarOrig);
      }
      else if (uploadAvatarView) {
        $(this).find('form')[0].reset();
       $(".avatar-view").attr("src",avatarDefault);
        $("#btnUploadAvatar").prop('disabled', true);
      }
      else {
        $(".avatar-view").attr("src",avatarDefault);
        $(".cover").attr("src",coverDefault);
      }
      if (uploadCoverView) {
       $(this).find('form')[0].reset();
       $(".cover").attr("src",coverDefault);
        $("#btnUploadCover").prop('disabled', true);
      }
    });
    
  // RESIZE COVER MODAL ON OPEN 
  
  $('#coverModal').on('show.bs.modal', function () {
    $(this).find('.modal-dialog').css({
      width:  parseInt($('#cover-hidden').css('width'))+ 30,
      height:'auto', 
      'max-height':'100%'
    });
  });
  
  // RESIZE AVATAR MODAL ON OPEN 
  
    $('#avatarModal').on('show.bs.modal', function () {
      var awidth;
      if (cropAvatarView) {
        awidth = parseInt($("#avatar_cropbox").find("div").find("img").css('width'))+ 30;
      }
      else {
        awidth = parseInt($("#avatar-hidden").css('width'))+ 30;
      }
      $(this).find('.modal-dialog').css({
        width:  awidth,
        height:'auto', 
        'max-height':'100%'
    });
  });
  
});

