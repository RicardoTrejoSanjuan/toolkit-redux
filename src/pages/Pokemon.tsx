import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonApi } from "../services/PokemonService"
import Card from "../components/Card";
import { AppDispatch, RootState } from "../store/store";

export default function Pokemon() {
    const dispatch: AppDispatch = useDispatch();
    const { pokemons, loading, page } = useSelector((state: RootState) => state.pokemon);

    useEffect(() => {
        dispatch(getPokemonApi())
    }, []);

    return (
        <main className="container mx-auto px-6 py-20">
            <div className="p-8 text-center">
                <h1 className="text-5xl font-extrabold text-blue-800 mb-4 uppercase">
                    Pokemon
                </h1>
                {
                    loading ?
                        <span className="text-2xl">Loading...</span> :
                        <>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {
                                    pokemons.map((pokemon, index) => (
                                        <Card key={index} pokemon={pokemon} />
                                    ))
                                }
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-purple-600 rounded-lg text-white p-2 text-xl w-32"
                                    onClick={() => dispatch(getPokemonApi(page-1))}
                                >{`<< Previous`}</button>
                                <span className="p-2 text-xl">{page}</span>
                                <button
                                    className="bg-purple-600 rounded-lg text-white p-2 text-xl w-32"
                                    onClick={() => dispatch(getPokemonApi(page))}
                                >{`Next >>`}</button>
                            </div>
                        </>
                }

            </div>
        </main>
    )
}
