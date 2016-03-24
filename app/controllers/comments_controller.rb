class CommentsController < ApplicationController
  
  def create
    pst = Post.find(params[:post_id])
    @comment = pst.comments.new(comments_param)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to :back
    end
  end
  
  def destroy
    pst = Post.find(params[:post_id])
    @comment = pst.comments.find(params[:id])
    @comment.destroy
    redirect_to :back
  end
  
  private
    def comments_param
      params.require(:comment).permit(:body)
    end
  
end