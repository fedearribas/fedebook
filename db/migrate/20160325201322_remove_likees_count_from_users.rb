class RemoveLikeesCountFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :likees_count, :integer
  end
end
