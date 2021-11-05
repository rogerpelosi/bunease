class Chum < ApplicationRecord

    belongs_to :follower, class_name: 'User'
    belongs_to :followgainer, class_name: 'User'

    validates :follower_id, uniqueness: { scope: :followgainer_id }
    validates :followgainer_id, uniqueness: { scope: :follower_id }

end
