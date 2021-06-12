class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :track_number, :integer, null: false, default: 0
    change_column_default :songs, :track_number, nil
  end
end
