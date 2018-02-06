class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.integer :time
      t.date :date
      t.string :planeNumber
      t.integer :plane_id
      t.string :squawks
      t.string :flightTime

      t.timestamps
    end
  end
end


# :time, :date, :flightTime, :planeNumber, :squawks)