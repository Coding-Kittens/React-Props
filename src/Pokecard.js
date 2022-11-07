import './Pokecard.css'
const Pokecard = ({id,name,type,base_experience})=>{

return <div className ='Pokecard'>
<h2>{name}</h2>
<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
<p>Type: {type}</p>
<p>EXP: {base_experience}</p>
</div>
}

export default Pokecard
