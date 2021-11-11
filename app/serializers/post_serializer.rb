class PostSerializer < ActiveModel::Serializer

  attributes :id, :image, :label, :thumb

  has_one :user
  has_many :comments

end
