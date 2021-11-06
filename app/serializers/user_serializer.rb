class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :name, :pp, :bio, :email

  has_many :posts
  has_many :followgainers
  
end
