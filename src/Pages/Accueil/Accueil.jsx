import Banniere from './images/banniere1.0.jpg'

function Accueil() {
    return (
        <div className="accueil">
            <div className="title-animation">
                <img classname="banniere" src={Banniere} alt ="Banniere"/>
                
                <h1>Bienvenue sur votre espace tricot personnalisé ! 🧶</h1>
                <h3 className="title-présentation">Que vous soyez débutant ou expert, ce site est conçu pour vous aider à organiser et suivre vos projets tricot avec facilité. Vous pouvez y garder une trace de vos créations passées, présentes, et même futures !
✨ enregistrez vos projets : suivez l'avancement de vos ouvrages, qu'ils soient en cours ou terminés.
✨ Gérez votre inventaire : tenez à jour votre stock de laines, aiguilles et accessoires pour ne jamais manquer de matériel.
✨ Compteur de rang : un outil simple et efficace pour ne jamais perdre le fil de vos projets !
✨ Notez vos envies : ajoutez facilement vos futurs projets à réaliser et commencez à planifier dès maintenant vos prochaines créations !

Que vous réalisez des accessoires, des vêtements ou que vous rêvez de nouvelles idées, ce site vous accompagne dans chaque étape de votre passion. Organisez, inspirez-vous et créez à votre rythme ! </h3>
                <div className="btn-group my-5"></div>
            </div>
        </div>
    )
}

export default Accueil
