class RecipeSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :about, :category, :description, :ingredients, :measurements, :recipe_image
  def recipe_image
    rails_blob_url(object.recipe_image) if object.recipe_image.attached?
  end

  def description
    object.description.split(';').map { |item| item.strip }
  end

  def ingredients
    object.ingredients.split(',').map { |item| item.strip }
  end

  def measurements
    object.measurements.split(',').map { |item| item.strip }
  end
end
