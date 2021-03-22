class DropApiPlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    drop_table :api_playlist_songs
  end
end
