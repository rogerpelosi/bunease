class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :name, :pp, :bio

  # has_many :chums
  
end
