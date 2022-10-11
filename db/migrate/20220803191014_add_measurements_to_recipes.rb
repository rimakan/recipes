class AddMeasurementsToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :measurements, :text
  end
end
