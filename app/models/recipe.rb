class Recipe < ApplicationRecord
  has_one_attached :recipe_image
  belongs_to :user
  validates :title, :description, :ingredients, :about, :recipe_image, presence: true
  validates :title, uniqueness: true
end
