import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import  {getProject} from '../../lib/common.js'
import'./Inprogress.scss'

function InProgress() {
    const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line max-len
  const displayProject = () => (
    project ? project
    .filter(project=>project.statut==="en cours")
    .map(project => <Card key={project.id} projet={project} />) : <h1>Vide</h1>
);


  useEffect(() => {
    async function getProjectsList() {
      const data = await getProject();
      if (data) {
      
        setProject(data);
        setLoading(false);
     
    }
    }
    getProjectsList();
  }, []);
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
                         {loading ? <h1>Chargement</h1> :displayProject()}
                      
                    </div>
                </div>
                <div className="btn-group my-5"></div>
            </div>
        </div>
        
    )
}

export default InProgress