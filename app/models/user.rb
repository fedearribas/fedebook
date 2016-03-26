class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :posts       
  
  validates :first_name, presence: :true
  validates :last_name, presence: :true
  validates :birth_date, presence: :true
  
  
   has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/missing.png"
  validates_attachment :avatar,
    #:presence => true,
    :size => { :in => 0..10.megabytes },
    :content_type => { :content_type => /^image\/(jpeg|png|gif|tiff)$/ }
    
    has_attached_file :cover, styles: { medium: "850x315>"}, default_url: "/assets/missing-cover.png"
  validates_attachment :cover,
    #:presence => true,
    :size => { :in => 0..10.megabytes },
    :content_type => { :content_type => /^image\/(jpeg|png|gif|tiff)$/ }
  
  self.per_page = 10
    
  def full_name
    "#{first_name} #{last_name}"
  end
  
  def self.search_by_name(name)
     where('first_name LIKE ? or last_name LIKE ?',
      "%#{name}%", "%#{name}%").order(:first_name)
  end
  
end


