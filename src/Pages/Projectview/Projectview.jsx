import { useParams } from 'react-router-dom'
import CurrentProject from '../../Data/KnitProject.json'
import { Link } from 'react-router-dom'



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
            <div className="containerwork">
                <img
                    className="img-work"
                    src={projet.pictures}
                    alt={projet.title}
                />

                <div className="containerdescription">
                    <div>
                        <p className="designer">
                            {projet.designer}
                        </p>
                    </div>
                    <div>
                        <p className="categorie">{projet.categorie}</p>
                    </div>
                    <div>
                        <p className="fil">{projet.fil}</p>
                    </div>
                    <div>
                        <p className="aiguilles">{projet.aiguilles}</p>
                    </div>
                    <div>
                        <p className="size">{projet.size}</p>
                    </div>
                    <div>
                        <p className="échantillons">{projet.échantillon}</p>
                    </div>
                    <div>
                        <p className="langue">{projet.langues}</p>
                    </div>
                    <div>
                        <p className="difficulté">{projet.difficulté}</p>
                    </div>
                    <div>
                        <p className="note">{projet.note}</p>
                    </div>

                    
                </div>
            </div>
            <div>
                <Link className="projetlink" to="/Currentproject">
                    Modifier
                </Link>
            </div>
            <div>
                <Link className="projetlink" to="/Projet">
                    Enregistrer
                </Link>
            </div>
        </div>
    )
}

export default Projectview