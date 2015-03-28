class UpdateUserModel < ActiveRecord::Migration
  def change
    remove_column :users, :username
    add_column :users, :provider, :string, default: 'facebook'
    add_column :users, :uid, :bigint
    add_column :users, :oauth_token, :string
    add_column :users, :email, :string
    rename_column :users, :name, :full_name
  end
end
