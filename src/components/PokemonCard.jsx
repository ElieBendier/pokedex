import styles from '../css/PokemonCard.module.css'
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
    return (
        <figure className={styles.card}>
            {pokemon.imgSrc != null ? <img className={styles.cardImg} src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
            <figcaption className={styles.cardTitle}>{pokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired,
}

export default PokemonCard;