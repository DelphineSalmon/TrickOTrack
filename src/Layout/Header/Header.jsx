import { Link } from 'react-router-dom'
import Dropdown1 from '../../Components/Router/DropdownProjet'
import Dropdown2 from '../../Components/DropdownInventaire'
import './header.scss'

function Header() {
    return (
        <div className="navbar">
             <h1 className='navlogo '>Tric O Track</h1>
            <Link className="navbar_link" to="/">
                Accueil
            </Link>
                <div className='navbar_link'>
                    <Dropdown1></Dropdown1> 
                </div>
                <div className='navbar_link'>
                    <Dropdown2></Dropdown2> 
                </div>
            <Link className="navbar_link" to="/Map">
                Merceries autour de moi
            </Link>
            
            <Link className="navbar_link" to="/Video">
                Le coin des tutos
            </Link>
            <Link className="navbar_link" to="/Connexion">
                Connexion
            </Link>
        </div>
    )
}

export default Header