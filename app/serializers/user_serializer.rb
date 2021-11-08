class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :name, :pp, :bio, :email

  has_many :posts
  #, -> { order(created_at: :desc) }
  has_many :followgainers

  # def posts 
  #   @posts = self.posts.order(created_at: :desc)
  # end 
  
end
