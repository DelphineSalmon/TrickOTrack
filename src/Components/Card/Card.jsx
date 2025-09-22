import { Link } from 'react-router-dom'
import './card.scss'


function Card({ projet }) {
    return (
        <div className="card">
            <Link className="cardlink" to={`/Projectview/${projet.id}`}>
                <img
                    className="card__imgcard"
                    src={projet.cover}
                    alt={projet.title}
                />
            </Link>
        </div>
    )
}

export default Card