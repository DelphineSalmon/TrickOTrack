
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import  {getProject} from '../../lib/common';
import'./knitlist.scss'



function KnitlistPage() {

const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line max-len
  const displayProject = () => (
    project ? project
    .filter(project=>project.statut==="envie")
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
        <div className="knit-list-page">
            <div className="title-animation">
                
                <h1 className="title">  🧶 Knit-List, </h1>
                <h2 className="second-title">Le fil de tes envies</h2>
                <p className='text-kintlist'>Dans cet espace, chaque idée a sa place : un gilet repéré au détour d’un fil Instagram, un bonnet doux à offrir, une couverture que l’on rêve de monter maille après maille. Ici, tu peux enregistrer tes projets futurs, noter les fils à utiliser, et garder le fil de tes inspirations. Une liste qui t’accompagne au rythme de tes aiguilles.</p>

                <Link className="boutonprojet" to="/Newdesire">
                    Ajouter une envie 
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


export default KnitlistPage