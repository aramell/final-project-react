class CreatePlanes < ActiveRecord::Migration[5.1]
  def change
    create_table :planes do |t|
        t.string :planenumber
        t.integer :flight_ids
        t.string :squawks
        
      t.timestamps
    end
  end
end
