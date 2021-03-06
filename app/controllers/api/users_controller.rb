class Api::UsersController < ApplicationController

    before_action :set_user, only: [:follow, :unfollow, :show]
    skip_before_action :confirm_auth, only: [:create, :show]

    def index 
        render json: User.where("id != ?", current_user.id)
    end 

    def show 
        render json: @user, include: ['posts', 'posts.comments', 'followgainers']
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
            @user_posts = current_user.posts.order(created_at: :desc)
            render json: current_user, include: ['posts', 'posts.comments', 'followgainers'], 
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
        render json: @user, status: :created 
    end 

    def unfollow 
        current_user.followed_users.find_by(followgainer_id: @user.id).destroy
    end 

    private 

    def user_params 
        params.permit(:username, :name, :email, :bio, :pp, :password, :password_confirmation)
    end 

    def set_user 
        @user = User.find(params[:id])
    end 

end
