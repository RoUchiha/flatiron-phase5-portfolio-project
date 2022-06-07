class SessionsController < ApplicationController

    def create 
        @user = User.find_by(username: session_params[:username])
        if @user && @user.authenticate(session_params[:password])
            login!
            render json: {
                user: @user
            }
        else
            render json: {

                error: ['Please check your username/password and try again, or create an account if you do not have one.']
            }
        end
    end

    def is_logged_in
        current_user

        if logged_in? && current_user
            render json: {
                logged_in: true,
                user: current_user
            }
        else
            render json: {
                logged_in: false
            }
        end
    end

    def destroy
        logout!
        render json: {
            logged_out: true 
        }
    end

    private

        def session_params
            params.require(:user).permit(:username, :password)
        end

end