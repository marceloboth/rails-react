class Field < ApplicationRecord
  include PgSearch
  mount_base64_uploader :image, ImageUploader

  pg_search_scope :search, against: [:name, :description, :address]
end
