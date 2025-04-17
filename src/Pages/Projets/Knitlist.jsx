
import { Link } from 'react-router-dom'

function Knitlist() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Knit-List 🧶</h1>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter une envie 
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default Knitlist