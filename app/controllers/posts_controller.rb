class PostsController < ApplicationController
  
  before_action :get_user
  
  def index
    @post = @user.posts.new
    @posts = @user.posts.all
  end
  
  def create
    @post = get_user.posts.new(posts_param)
    if @post.save
      flash[:success] = "Post successfully added!"
      redirect_to user_posts_path(get_user)
    else
      flash[:danger] = "There was a problem adding the post"
    end
  end
  
  def destroy
    @post = get_user.posts.find(params[:post_id])
    @post.destroy
    flash[:success] = "Post deleted."
    redirect_to user_posts_path(get_user)
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
