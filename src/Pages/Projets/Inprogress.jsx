import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import CurrentProject from '../../Data/KnitProject.json'
import'./Inprogress.scss'

function InProgress() {
    return (
        <div className="inprogress-page">
            <div className="title-animation">
                
                <h1 className="title">  Mes Projets en cours 🧶</h1>
                <h2 className="second-title">Des mailles en devenir...</h2>
                <p className='text-inprogress'>Cet espace me permet de suivre leur évolution, noter mes idées, conserver les détails essentiels : type de laine, taille d’aiguilles, points utilisés… Un carnet vivant qui m’aide à garder le fil sans perdre la magie.

Entre organisation et création, cette page est mon fil conducteur dans l’univers infini du tricot..</p>
               
<Link className="boutonprojet" to="/Currentproject">
                    Ajouter un projet 
                </Link>

                <div className="containercards">
                    <div className="cards">
                        {CurrentProject.filter(projet=>projet.statut==="en cours").map((projet) => (
                            <Card key={projet.id} projet={projet} />
                        ))}
                    </div>
                </div>
                <div className="btn-group my-5"></div>
            </div>
        </div>
        
    )
}

export default InProgress