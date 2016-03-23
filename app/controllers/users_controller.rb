class UsersController < ApplicationController
  
  def index
    @post = current_user.posts.build
    @posts = current_user.posts.all
  end
  
  
  
end