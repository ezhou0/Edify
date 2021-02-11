class AddDateToColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birth_date, :string, null: false, default: ''
    change_column_default :users, :birth_date, nil
  end
end
