class Post < ApplicationRecord

  belongs_to :user
  
  has_many :comments, dependent: :destroy

  validates :image, presence: true

end
