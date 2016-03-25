class RemoveLikersCountFromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :likers_count, :integer
  end
end
