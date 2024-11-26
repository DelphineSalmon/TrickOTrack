import React, { useEffect } from 'react'

import Header from '../../Layout/Header/Header'
import Accueil from '../../Pages/Accueil/Accueil'
import Connexion from '../../Pages/Connexion/Connexion'
import Footer from '../../Layout/Footer/Footer'
import {
    HashRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom'

function ScrollToTop() {
    const chemin = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [chemin])
    return null
}
function MyRouter() {
    return (
        <React.StrictMode>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/Connexion" element={<Connexion />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default MyRouter