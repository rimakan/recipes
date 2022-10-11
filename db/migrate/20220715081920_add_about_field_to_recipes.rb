class AddAboutFieldToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :about, :text
  end
end
