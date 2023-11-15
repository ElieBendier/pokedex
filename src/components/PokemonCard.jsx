import styles from '../css/PokemonCard.module.css'


function PokemonCard({ pokemon }) {
    return (
        <figure className={styles.card}>
            {pokemon.imgSrc != null ? <img className={styles.cardImg} src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            <figcaption className={styles.cardTitle}>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;