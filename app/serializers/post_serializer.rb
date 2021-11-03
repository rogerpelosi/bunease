class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :label
  has_one :user
end
