class User < ApplicationRecord
  has_secure_password
  has_many :recipes, dependent: :destroy
  validates :email, uniqueness: { message: 'This email is already registered.' }
  validates :first_name, :last_name, presence: true
end
