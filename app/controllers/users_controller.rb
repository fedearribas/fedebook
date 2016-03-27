class UsersController < ApplicationController

before_action :authenticate_user!, only: [:show]

  def index
  
  end
  
  
  def show
    @user = User.find(params[:id])
    @post = @user.posts.build
    @comment = Comment.new
  end
  
  private
  
  def user_params
    params.require(:user).permit(:avatar, :cover)
  end
  
end