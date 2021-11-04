class Api::PostsController < ApplicationController

    before_action :set_post, only: [:show]

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
        render json: Post.all 
    end 

    def show 
        render json: @post
    end 

    private 

    def post_params 
        params.permit(:image, :label) 
    end 

    def set_post  
        @post = Post.find(params[:id])
    end 

end
