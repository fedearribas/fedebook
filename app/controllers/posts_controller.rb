class PostsController < ApplicationController
  
  before_action :get_user
  before_action :authenticate_user!

  def create
    @post = current_user.posts.new(posts_param)
    @post.profile_posted = @user.id
    if @post.save
      flash[:success] = "Post successfully added!"
      redirect_to :back
    else
      flash[:danger] = "There was a problem adding the post"
    end
  end
  
  def destroy
    @post = @user.posts.find(params[:id])
    @post.destroy
    flash[:success] = "Post deleted."
    redirect_to :back
  end
  
  
  
  private
    def posts_param
      params.require(:post).permit(:body)
    end
    
    def get_user
      @user = User.find(params[:user_id])
    end
    
    def only_current_user
      redirect_to(root_url) unless @user == current_user
    end
  
end
