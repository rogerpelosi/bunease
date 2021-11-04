class Api::SessionsController < ApplicationController

    skip_before_action :confirm_auth, only: [:create]

    def create
         
        @user = User&.find_by_username(params[:username])
        if @user&.authenticate(params[:password])
            session[:user_id] = @user.id
            # byebug
            render json: @user,
            status: :ok
        else 
            render json: {error: "Invalid Username or Password"},
            status: :unauthorized
        end 
    end 

    def destroy 
        session.delete :user_id 
        head :no_content 
    end 
    
end