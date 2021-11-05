class Api::UsersController < ApplicationController

    before_action :set_user, only: [:follow, :unfollow, :show]
    skip_before_action :confirm_auth, only: [:create]

    def index 
        render json: User.all
    end 

    def show 
        render json: @user
    end 
    
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

    def me 
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

    def follow 
        current_user.followgainers << @user 
    end 

    def unfollow 
        current_user.followed_users.find_by(followee_id: @user.id).destroy
    end 

    private 

    def user_params 
        params.permit(:username, :name, :email, :bio, :profile_image, :password, :password_confirmation)
    end 

    def set_user 
        @user = User.find(params[:id])
    end 

end
