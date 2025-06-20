import { useParams } from 'react-router-dom'
import CurrentProject from '../../Data/KnitProject.json'
import { Link } from 'react-router-dom'
import'./projectview.scss'



function Projectview() {
    const { id } = useParams()
    const projets = CurrentProject.filter((value) => value.id === id)
    if (projets.length === 0) {
        //return <Error />
    }
    const projet = projets[0]
    return (
        <div className="project">
            <h1 className="titleproject">{projet.title}</h1>
            <div className="deco-projet"></div>
            <div className="containerproject">
                <img
                    className="img-projet"
                    src={projet.pictures}
                    alt={projet.title}
                />

                <div className="containerdescription">
                    <div>
                        <p  className="designer"> Designer:
                             {projet.designer}
                        </p>
                    </div>
                    <div>
                        <p className="categorie"> Catégorie: {projet.categorie}</p>
                    </div>
                    <div>
                        <p className="fil"> Fil: {projet.fil}</p>
                    </div>
                    <div>
                        <p className="aiguilles"> Aiguilles: {projet.aiguilles}</p>
                    </div>
                    <div>
                        <p className="size"> Tailles: {projet.size}</p>
                    </div>
                    <div>
                        <p className="échantillons"> Echantillon: {projet.échantillon}</p>
                    </div>
                    <div>
                        <p className="langue"> Langue: {projet.langue}</p>
                    </div>
                    <div>
                        <p className="difficulté"> Difficulté: {projet.difficulté}</p>
                    </div>
                    <div>
                        <p className="note"> Notes: {projet.note}</p>
                    </div>

                    
                </div>
            </div>
            <div className='containerlink'>
                <div>
                    <Link className="projetlink1" to="/Currentproject">
                     Modifier
                 </Link>
                </div>
                <div>
                    <Link className="projetlink2" to="/InProgress">
                        Enregistrer
                    </Link>
                </div>
            </div>
            </div>
        
    )
}

export default Projectview