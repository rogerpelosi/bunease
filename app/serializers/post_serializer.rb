class PostSerializer < ActiveModel::Serializer

  attributes :id, :image, :label

  has_one :user
  has_many :comments

  #write method that looks through all comments and returns all with that post id?

end
