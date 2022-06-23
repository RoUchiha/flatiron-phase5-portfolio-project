class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :user_id
      t.string :user_username
      t.string :pokemon1
      t.string :pokemon2
      t.string :pokemon3
      t.string :pokemon4
      t.string :pokemon5
      t.string :pokemon6

      t.timestamps
    end
  end
end
