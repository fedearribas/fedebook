class Post < ActiveRecord::Base
    belongs_to :user
    belongs_to :profileposted, class_name: "User"
    has_many :comments, dependent: :destroy
    
     has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "avatar/missing.jpg"
     validates_attachment :avatar,
    #:presence => true,
    :size => { :in => 0..10.megabytes },
    :content_type => { :content_type => /^image\/(jpeg|png|gif|tiff)$/ }
    
    default_scope { order(created_at: :desc) }
    
end

