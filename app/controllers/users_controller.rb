class UsersController < ApplicationController
  # has_secure_password

  def new
    @user = User.new
  end


=begin
  create action saves data to database. creates new session. redirects to home page

=end

  def create
    @user = User.new(user_params)
    if @user.save
      #sessions are stored as key value pair below
      session[:user_id] = @user.id
      redirect_to '/'
     else
      redirect_to '/signup'
    end
  end



  #write all the private methods below

private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end


end
