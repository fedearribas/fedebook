class PostlikesController < ApplicationController

  def create
    @postlike = Postlike.new
    @postlike.user_id = current_user.id
    @postlike.post_id = params[:post_id]
    @pst = Post.find(params[:post_id])
    if @postlike.save
      #flash[:success] = "Post successfully added!"
     # redirect_to :back
           
      respond_to do |format|
        format.html { redirect_to :back }
        format.json { head :no_content }
        format.js
      end
    end
    #else
    #  flash[:danger] = "There was a problem adding the post"
    #end
  end
  
  def destroy
    @postlike = current_user.postlikes.find(params[:id])
    @pst = Post.find(params[:post_id])
    if @postlike.destroy
    #flash[:success] = "Post deleted."
    #redirect_to :back
     # end
      respond_to do |format|
        format.html { redirect_to :back }
        format.json { head :no_content }
        format.js   { render :layout => false }
      end
    end
  end
  
  
  
  private
    def postlike_param
      params.require(:postlike).permit(:user_id, :post_id)
    end
    
    def get_user
      @user = User.find(params[:user_id])
    end
    
    def only_current_user
      redirect_to(root_url) unless @user == current_user
    end
  
end
