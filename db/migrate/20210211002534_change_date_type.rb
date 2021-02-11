class ChangeDateType < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birth_date
    add_column :users, :birth_date, :date, null: false, default: Date.today
    change_column_default :users, :birth_date, nil
  end
end
