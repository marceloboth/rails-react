class CreateFields < ActiveRecord::Migration[5.1]
  def change
    create_table :fields do |t|
      t.string :name
      t.string :image
      t.text :description
      t.string :address

      t.timestamps
    end
  end
end
