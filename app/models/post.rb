class Post < ApplicationRecord

  belongs_to :user
  
  has_many :comments, -> { order(created_at: :desc) }, dependent: :destroy

  validates :image, presence: true

end
