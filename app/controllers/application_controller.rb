class ApplicationController < ActionController::API
  
  include ActionController::Cookies

  before_action :confirm_auth

  private 

  def current_user 
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  def confirm_auth 
    render json: {error: "Please Login :-)"}, status: :unauthorized unless current_user
  end 

end
