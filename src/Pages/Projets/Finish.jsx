import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import  {getProject} from '../../lib/common.js'
import'./Finish.scss'

function Finish() {

     const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line max-len
  const displayProject = () => (
    project ? project
    .filter(project=>project.statut==="fini")
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
        <div className="finish-page">
            <div className="title-animation">
                
                <h1 className="title"> ✨ Mes projet terminés </h1>
                <h2 className="second-title">Mailles abouties</h2>
                <p className='text-inprogress'>Chaque projet terminé est une petite victoire, une histoire qui s’est déroulée jusqu’au dernier rang. Cette page rassemble les ouvrages que j’ai eu le bonheur d’achever : gilets, châles, bonnets ou chaussettes… tous porteurs de patience et de passion. Un coin doux pour feuilleter mes mailles passées, et les voir vivre au-delà des aiguilles.</p>
               
<Link className="boutonprojet" to="/Projet">
                    Ajouter un projet terminé 
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

export default Finish