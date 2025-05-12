
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import KnitlistData from '../../Data/KnitList.json'
import'./knitlist.scss'

function KnitlistPage() {
    return (
        <div className="accueil">
            <div className="title-animation">
                
                <h1 className="title">  Knit-List 🧶</h1>

                <div className="containercards">
                    <div className="cards">
                        {KnitlistData.map((projet) => (
                            <Card key={projet.id} projet={projet} />
                        ))}
                    </div>
                </div>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter une envie 
                </Link>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default KnitlistPage