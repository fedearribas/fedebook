class DashboardController < ApplicationController
    
  def index
    
  end
  
  def search
    @users = User.search_by_name(params[:search_name]).paginate(:page => params[:page])
  end
    
end