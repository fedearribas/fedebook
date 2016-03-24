class UsersController < ApplicationController
  before_action :get_user
  def index
  
  end
  
  
  def show
    @post = @user.posts.build
    @posts = Post.all_by_profile(@user)
    @comment = Comment.new
  end
  
  private
  
  def get_user
    @user = User.find(params[:id])
  end
  
end