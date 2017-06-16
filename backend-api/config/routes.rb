Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :fields
      jsonapi_resources :matches
    end
  end
end
