import { Link } from 'react-router-dom'

function Needle() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Mes Aiguilles 🧶</h1>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter des aiguilles
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default Needle