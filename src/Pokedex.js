import Pokecard from './Pokecard'

const Pokedex = ({pokemon})=>{
return <>
<h1>Pokedex</h1>
  {pokemon.map(p =>(<Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>))}
  </>
}

export default Pokedex
