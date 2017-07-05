class Api::V1::FieldResource < JSONAPI::Resource
  attributes :name, :image, :description, :address, :created_at, :updated_at

  filter :search, apply: ->(records, value, _options) {
    records.search value
  }
end
