class CreateApiPlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :api_playlist_songs do |t|

      t.timestamps
    end
  end
end
