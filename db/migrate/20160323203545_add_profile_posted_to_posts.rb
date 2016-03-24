class AddProfilePostedToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :profile_posted, :integer
  end
end
