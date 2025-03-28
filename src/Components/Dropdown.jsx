import { useState } from "react";
import { Link } from "react-router-dom";

export default function KnittingProjectsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button 
        className="navbar_link dropdown_button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        Mes Projets tricots ▼
      </button>

      {isOpen && (
        <ul className="dropdown_menu">
          <li>
            <Link to="/Wips" className="dropdown_item" >
              Projets en cours
            </Link>
          </li>
          <li>
            <Link to="/Finish" className="dropdown_item" >
              Projets terminés
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}