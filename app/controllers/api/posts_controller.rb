class Api::PostsController < ApplicationController

    before_action :set_post, only: [:show]
    skip_before_action :confirm_auth

    def create  
        @post = current_user.posts.new(post_params)
        if post.save
            render json: @post,
            status: :created
        else 
            render json: @post.errors.full_messages,
            status: :unprocessable_entity
        end 
    end 

    def index 
        @posts = Post.where(:user_id => current_user.followgainers)
        render json: @posts
    end 

    def show 
        render json: @post, include: ["user", "comments", "comments.user"]
    end 

    private 

    def post_params 
        params.permit(:image, :label) 
    end 

    def set_post  
        @post = Post.find(params[:id])
    end 

end
