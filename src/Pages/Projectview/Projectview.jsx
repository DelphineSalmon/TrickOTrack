import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import  {getProjectById} from '../../lib/common.js'
import { Link } from 'react-router-dom'
import'./projectview.scss'



function Projectview() {
    const [projet, setProject] = useState(null);

    const { id } = useParams()
      useEffect(() => {
        async function getProjectsList() {
          const data = await  getProjectById(id);
          if (data) {
            setProject(data);
         
        }
        }
        getProjectsList();
      }, [id]);
      
     if (!projet) {
        return <div>Chargement du projet...</div>; // ou ton composant <Loader />
    }
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