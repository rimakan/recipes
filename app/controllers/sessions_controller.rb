class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(session_params[:email])

    if @user && @user.authenticate(session_params[:password])
      token = issue_token(@user)
      cookies.signed[:jwt] = { value: token, httponly: true }
      render json: { status: 'success', message: "Welcome aboard, #{@user.first_name}!" }
    else
      render json: { status: 'error', message: 'Incorrect username or password.' }, status: :unprocessable_entity
    end
  end

  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: 'User is not logged in/could not be found.' }
    end
  end

  def destroy
    logout!
    render json: { status: 'success', message: 'Have a nice day!' }
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
