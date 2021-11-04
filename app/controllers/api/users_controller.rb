class Api::UsersController < ApplicationController

    def create 
        @new_user = User.new(user_params)
        if @new_user.save
            session[:user_id] = @new_user.id
            render json: @new_user,
            status: :created 
        else 
            render json: @new_user.errors.full_messages, 
            status: :unprocessable_entity 
        end 
    end 

    def show 
        if current_user
            render json: current_user, 
            status: :ok
          else
            render json: { error: 'No active session' }, 
            status: :unauthorized
          end
    end 

    def update 
        current_user.update(user_params)
        if current_user.save
            render json: current_user,
            status: :ok 
        else 
            render json: current_user.errors.full_messages, 
            status: :unprocessable_entity 
        end 
    end 

    private 

    def user_params 
        params.permit(:username, :name, :email, :bio, :profile_image, :password, :password_confirmation)
    end 

end
