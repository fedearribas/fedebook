class DashboardController < ApplicationController
    
  def index
    if user_signed_in?
      @user = current_user
      @post = @user.posts.build
      @friends_feed = current_user.followed_feed
    end
  end
  
  def search
    @users = User.search_by_name(params[:search_name]).paginate(:page => params[:page])
  end
    
end