class StaticController < ApplicationController

    def home
        render json: {status: "it work"}
    end

end