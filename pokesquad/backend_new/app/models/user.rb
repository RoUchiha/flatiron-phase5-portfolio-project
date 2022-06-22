class User < ApplicationRecord

    has_secure_password


    validates_presence_of :username
    validates_uniqueness_of :username
    validates :username, length: {minimum: 3}


    has_many :teams
    has_many :comments



end
