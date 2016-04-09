class CommentsController < ApplicationController
  
  def create
    pst = Post.find(params[:post_id])
    @comment = pst.comments.new(comments_param)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to :back
      #respond_to do |format|
      #format.html { redirect_to :back }
      #format.json { head :no_content }
      #format.js 
      #end
    end
  end
  
  def destroy
    pst = Post.find(params[:post_id])
    @comment = pst.comments.find(params[:id])
    @comment.destroy
    ##redirect_to :back
    
    respond_to do |format|
    format.html { redirect_to :back }
    format.json { head :no_content }
    format.js   { render :layout => false }
    end
    
  end
  
  private
    def comments_param
      params.require(:comment).permit(:body)
    end
  
end