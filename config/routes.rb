Rails.application.routes.draw do
  root 'welcome#index'

  get 'users/new'
  get 'users/create'

  get '/houses' => 'houses#new'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
