Rails.application.routes.draw do

  match '/auth/:provider/callback', to: 'sessions#create', via: :get
  match 'auth/failure', to: redirect('/'), via: :get
  match '/signout', to: 'sessions#destroy', as: 'signout', via: :get

  match '/friends', to: 'users#friends', via: :get
  match '/games/current_games', to: 'games#current_games', via: :get
  match '/games/finished_games', to: 'games#finished_games', via: :get
  match '/current_status', to: 'sessions#check_status', via: :get
  match '/current_user', to: 'sessions#current_user', via: :get

  get '/user', to: redirect('/user')
  get '/login', to: redirect('/login')

  root 'sessions#check_status'

  get 'users/index'
  get 'users/show'

  resources :rounds, only: ['create', 'index', 'update'] do
    resources :photos, only: ['create']
  end
  resources :games, only: ['create']

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
