$(document).ready(function(){
    document.getElementById("avatar-upload").onchange = function () {
        var reader = new FileReader();
    
        reader.onload = function (e) {
          
        var image = new Image();
        image.src = e.target.result;
        var width = image.width;
        var height = image.height;
      
      image.onload = function() {
            // get loaded data and render thumbnail.
          $("#avatar_cropbox").find("div").find("img").attr("src", e.target.result);
        };
        }
    
        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    };
    
    $('.modal').on('hidden.bs.modal', function(){
   //
    });
});