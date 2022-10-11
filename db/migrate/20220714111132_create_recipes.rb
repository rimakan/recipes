class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.text :title
      t.text :description
      t.text :ingredients
      t.text :image

      t.timestamps
    end
  end
end
