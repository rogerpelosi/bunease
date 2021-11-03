class PostSerializer < ActiveModel::Serializer

  attributes :id, :image, :label

  has_one :user
  has_many :comments

end
