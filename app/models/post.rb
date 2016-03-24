class Post < ActiveRecord::Base
    belongs_to :user
    belongs_to :profileposted, class_name: "User"
    has_many :comments, dependent: :destroy
    
    default_scope { order(created_at: :desc) }

    def self.all_by_profile(profile)
       where(profile_posted: profile) 
    end
    
end

