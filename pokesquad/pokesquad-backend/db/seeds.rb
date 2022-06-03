# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

poke_array = []


for i in 1..898
    data = open("https://pokeapi.co/api/v2/pokemon/#{i}").read
    json_data = JSON.parse(data)
    poke_array.push(json_data)
end

for pokemon in poke_array
    Pokemon.create(
        name: pokemon["name"],
        pokedex: pokemon["id"].to_int,
        sprite: pokemon["sprites"]["front_default"]
    )
end