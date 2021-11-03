class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :pp, :password_digest, :bio
end
