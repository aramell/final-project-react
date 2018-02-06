class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.integer :flighttime
      t.date :date
      t.string :planenumber
      t.integer :plane_id
      t.string :pilot

      t.timestamps
    end
  end
end
