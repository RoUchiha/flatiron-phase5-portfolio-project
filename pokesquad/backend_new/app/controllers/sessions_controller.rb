class SessionsController < ApplicationController

    include CurrentUserConcern


    def login
        user = User.find_by(username: params['user']['username'])
        .try(:authenticate, params['user']['password'])

        if user
            session[:user_id] = user.id 
            session[:username] = user.username
            render json: { 
            status: 'created', 
            logged_in: true,
            user: user 
        }
        else
            render json: { status: 401 }
        end

    end


    def logged_in
        if @current_user
            render json: {
                logged_in: true,
                user: @current_user,
                session_id: session[:user_id]
            }
        else
            render json: {
                logged_in: false
            }
        end

    end


    def logout 
        reset_session

        render json: {
            status: 200,
            logged_out: true 
        }
    end


end