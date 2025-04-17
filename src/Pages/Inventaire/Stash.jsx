import { Link } from 'react-router-dom'

function Stash() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Mon Stash de laine 🧶</h1>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter des laines
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default Stash