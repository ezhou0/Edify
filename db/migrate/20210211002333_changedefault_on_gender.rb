class ChangedefaultOnGender < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :gender, nil
  end
end
