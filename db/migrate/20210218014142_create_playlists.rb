class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
      add_index :playlists, :name
      add_index :playlists, :author_id
  end
end
