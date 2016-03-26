class RegistrationsController < Devise::RegistrationsController
  
    private
    def sign_up_params
      params.require(:user).permit(:first_name, :last_name, :email, :birth_date, :password, :password_confirmation)
    end
  
    def account_update_params
      params.require(:user).permit(:first_name, :last_name, :email, :birth_date, :password, :password_confirmation, :current_password, :avatar, :cover)
    end
  
    def update_resource(resource, params)
      resource.update_without_password(params)
    end
  
end