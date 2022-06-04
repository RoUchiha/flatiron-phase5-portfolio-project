class User < ApplicationRecord

    has_secure_password

    validates :username, presence: true
    validates :username, length: {minimum: 3}


    has_many :teams
    has_many :comments

end
