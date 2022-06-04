class SessionsController < ApplicationController

    def create 
        @user = User.find_by(username: params["user"][:username])
        if @user && @user.authenticate(params["user"][:password])
            login!
            redirect_to user_path(@user)
        else
            redirect_to new_session_path
            errors: ['Please check your username/password and try again, or create an account if you do not have one.']
        end
    end

    def destroy
        logout!
    end

end