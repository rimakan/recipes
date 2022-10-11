class RemoveImageFieldFromRecipe < ActiveRecord::Migration[7.0]
  def up
    remove_column :recipes, :image
  end

  def down
    add_column :recipes, :image, :text
  end
end
