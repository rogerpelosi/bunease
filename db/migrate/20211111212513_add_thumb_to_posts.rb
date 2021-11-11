class AddThumbToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :thumb, :string
  end
end
