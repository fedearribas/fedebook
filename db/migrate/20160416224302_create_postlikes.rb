class CreatePostlikes < ActiveRecord::Migration
  def change
    create_table :postlikes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
