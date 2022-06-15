class UserSerializer < ActiveModel::Serializer
  
  attributes :id, :username, :teams, :password_digest

    def teams 
      object.teams.collect do |team|
        TeamSerializer.new(team)
      end
    end

end
