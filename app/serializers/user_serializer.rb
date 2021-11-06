class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :name, :pp, :bio

  has_many :posts
  has_many :followgainers
  
end
