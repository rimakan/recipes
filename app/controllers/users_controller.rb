class UsersController < ApplicationController
  before_action :require_login, only: %i[show update destroy]
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      token = issue_token(@user)
      cookies.signed[:jwt] = { value: token, httponly: true }
      render json: { message: "You've successfully signed in!", status: 'success', user: @user.email }
    else
      @user.errors.messages
      render json: { message: 'This email is already registered', status: 'error' }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: @user
    else
      render json: { error: 'User could not be found.' }
    end
  end

  def update
    if current_user.update(user_params)
      render json: { status: 'success',
                     message: 'The user has been updated!',
                     email: current_user.email,
                     first_name: current_user.first_name,
                     last_name: current_user.last_name },
             status: :ok
    else
      render json: { status: 'error', message: 'Such a user already registered!' }, status: :unprocessable_entity
    end
  end

  def destroy
    current_user.destroy
    cookies.delete(:jwt)
    render json: { status: 'success', message: "You've successfully deactivated your account!" }
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
