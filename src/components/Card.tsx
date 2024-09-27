import type { Pokemon } from "../types"

type CardProps = {
    pokemon: Pokemon
}
export default function Card({pokemon}: CardProps) {
  return (
    <div
        className="shadow-lg flex flex-row">
            <img
                src={pokemon.url}
                alt={`pokeImg-${pokemon.name}`} />
            <h2 className="text-2xl truncate font-black">{pokemon.name}</h2>
        </div>
  )
}
