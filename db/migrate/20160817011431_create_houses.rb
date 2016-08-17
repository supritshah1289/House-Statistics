class CreateHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |t|
      t.string :address
      t.string :house_type
      t.string :built
      t.string :sqft
      t.string :last_sold_date
      t.string :last_sold_price
      t.string :tax_assessment_year
      t.string :tax_assessment
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
