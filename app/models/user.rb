class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  
  has_many :posts       
  
  validates :first_name, presence: :true
  validates :last_name, presence: :true
  validates :birth_date, presence: :true
  
  self.per_page = 10
    
  def full_name
    "#{first_name} #{last_name}"
  end
  
  def self.search_by_name(name)
     where('first_name LIKE ? or last_name LIKE ?',
      "%#{name}%", "%#{name}%").order(:first_name)
  end
  
end


