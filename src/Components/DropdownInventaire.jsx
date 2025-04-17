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
        Mon inventaire ▼
      </button>

      {isOpen && (
        <ul className="dropdown_menu">
             <li>
            <Link to="/Needle" className="dropdown_item" >
              Mes aiguilles
            </Link>
          </li>
          <li>
            <Link to="/Stash" className="dropdown_item" >
              Mon stash de laine
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}