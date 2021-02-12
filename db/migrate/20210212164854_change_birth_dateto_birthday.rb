class ChangeBirthDatetoBirthday < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :birth_date, :birthday
  end
end
