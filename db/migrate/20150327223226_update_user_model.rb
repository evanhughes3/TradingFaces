class UpdateUserModel < ActiveRecord::Migration
  def change
    remove_column :users, :username
    add_column :users, :provider, :string
    add_column :users, :uid, :integer
    add_column :users, :oauth_token, :string
  end
end
