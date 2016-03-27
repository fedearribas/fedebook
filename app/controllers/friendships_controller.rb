class FriendshipsController < ApplicationController
  
  def create
    friend = User.find(params[:friend_id])
    Friendship.create(friendship_params.merge!(friend_id: params[:friend_id], user_id: current_user.id)) unless current_user.follows_or_same?(friend)
    redirect_to user_path(params[:friend_id])
  end
  
  def destroy
    @friendship = Friendship.find(params[:id])
    if @friendship.destroy
      flash[:success] = "#{@friendship.friend.full_name} unfollowed"
    else
      flash[:danger] = "#{@friendship.friend.full_name} could not been unfollowed"
    end
    redirect_to root_path
    
  end
  
  private
    def friendship_params
      params.permit(:friend_id, :user_id)
    end
  
end