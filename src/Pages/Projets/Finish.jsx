import { Link } from 'react-router-dom'

function Finish() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Mes projet terminés 🧶</h1>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter un projet terminé 
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default Finish