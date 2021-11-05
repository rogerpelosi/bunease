class CreateChums < ActiveRecord::Migration[6.1]
  def change
    create_table :chums do |t|
      t.integer :follower_id
      t.integer :followgainer_id

      t.timestamps
    end
  end
end
