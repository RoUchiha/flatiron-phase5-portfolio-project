class SessionsController < ApplicationController

    def create 
        @user = User.find_by(username: params["user"][:username])
        if @user && @user.authenticate(params["user"][:password])
            login!
            render json: {
                user: UserSerializer.new(@user)
            }
        else
            render json: {

                error: ['Please check your username/password and try again, or create an account if you do not have one.']
            }
        end
    end

    def is_logged_in?
        
    end

    def destroy
        logout!
    end

end