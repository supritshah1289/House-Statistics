Rails.application.routes.draw do
  root 'welcome#new'
  get '/houses' => 'houses#new'
  get '/myhouses' => 'houses#index'

  get 'signup' => 'users#new'
  resources :users
  resources :houses

  get     '/login'  => 'sessions#new'
  post    'login'   => 'sessions#create'
  delete  'logout'  => 'sessions#destroy'

  post   'houses'   => 'houses#create'
  # delete 'houses'   => 'houses#destroy'





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
