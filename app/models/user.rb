class User < ApplicationRecord

    has_many :posts, -> { order(created_at: :desc) }
    has_many :comments

    has_secure_password

    #think of followgainers as the people a specified instance follows itself
    has_many :followed_users, foreign_key: :follower_id, class_name: 'Chum'
    has_many :followgainers, through: :followed_users

    #followers, think of other instances that follow specified instance
    has_many :following_users, foreign_key: :followgainer_id, class_name: 'Chum'
    has_many :followers, through: :following_users

    validates :username, uniqueness: true, presence: true
    # validates :bio, length: { maximum: 200 }
    
end



    #DEPRECATION WARNING: Setting custom parent classes is deprecated and will be removed in future versions.
    # acts_as_followable
    # acts_as_follower

    #the following relation is to allow other instances to have chums, and a current instance to be a chum (belonging to another instance)
    # belongs_to :an_account_owner, class_name: "User", optional: true

    # has_many :chums, class_name: "User", foreign_key: "an_account_owner_id"
    #the above, chums, is going to be used in displaying a particular instances list of friends, or chums 
