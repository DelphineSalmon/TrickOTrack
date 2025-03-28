import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Dropdown from '../../Components/Dropdown'
import './header.scss'

function Header() {
    return (
        <div className="navbar">
             <img className="navlogo" src={Logo} alt="Logo" />
            <Link className="navbar_link" to="/">
                Accueil
            </Link>
            <div className='navbar_link'>
                    <Dropdown></Dropdown> 
                </div>
           
            <Link className="navbar_link" to="/Desires">
                Mes envies tricots
            </Link>
            <Link className="navbar_link" to="/Stock">
                Mon inventaire
            </Link>
            <Link className="navbar_link" to="/Counter">
                Mon compteur de rangs
            </Link>
            <Link className="navbar_link" to="/Connexion">
                Connexion
            </Link>
        </div>
    )
}

export default Header