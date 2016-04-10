class UsersController < ApplicationController

before_action :authenticate_user!, only: [:show]

  def index
  
  end
  
  
  def show
    @user = User.find(params[:id])
    @post = @user.posts.build
    @comment = Comment.new
  end
  
  

  def crop_image
    if current_user.update(params[:user].permit!)
      redirect_to :back
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:avatar, :cover,:photo_original_w, :photo_original_h, :photo_box_w, :photo_crop_x, :photo_crop_y, :photo_crop_w, :photo_crop_h, :photo_aspect)
  end
  
end