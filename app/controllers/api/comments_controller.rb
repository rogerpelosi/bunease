class Api::CommentsController < ApplicationController

    skip_before_action :confirm_auth

    def create 
        @post = Post.find(params[:id])
        @new_comment = current_user.comments.new(comment: comment_params, post_id: @post.id)
        if @new_comment.save 
            render json: @new_comment,
            status: :created
        else 
            render json: @new_comment.errors.full_messages,
            status: :unprocessable_entity
        end 
    end 

    def index 
        render json: Comment.all, each_serializer: CommentSerializer
    end 

    def show 
        @comment = Comment.find(params[:id])
        render json: @comment 
    end 

    private 

    def comment_params 
        params.permit(:comment)
    end 
    
end
