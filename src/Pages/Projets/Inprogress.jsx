import { Link } from 'react-router-dom'

function InProgress() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Mes Projets en cours 🧶</h1>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter un projet 
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default InProgress