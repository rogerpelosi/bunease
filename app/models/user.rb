class User < ApplicationRecord

    belongs_to :an_account_owner, class_name: "User", optional: true

    has_many :posts
    has_many :chums, class_name: "User", foreign_key: "an_account_owner_id"
    
end
