class SessionsController < ApplicationController

    def create 
        @user = User.find_by(username: session[:username])
        if @user && @user.authenticate(session[:password])
            session[:user_id] = @user.id
            
            
            render json: {
                user: UserSerializer.new(@user), logged_in: true, status: 'created'
            }
        else
            render json: {

                error: ['Please check your username/password and try again, or create an account if you do not have one.']
            }
        end
    end

    def current
         @current_user ||= User.find(session[:user_id]) if session[:user_id]

        render json: {
            user: session[:user_id]
        }

    end

    def is_logged_in
        current_user

        if logged_in && current_user
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
        logout
        render json: {
            logged_out: true 
        }
    end

    private


    def login
        session[:user_id] = @user.id 
    end

    def logged_in
        !!session[:user_id]
    end

    

    def logout
        session.clear
    end

    def set_user
        @user = User.find_by(id: session[:user_id])
    end

        def session_params
            params.require(:user).permit(:username, :password)
        end

end