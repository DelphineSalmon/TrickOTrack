import React, { useEffect } from 'react'

import Header from '../../Layout/Header/Header'
import Accueil from '../../Pages/Accueil/Accueil'
import Connexion from '../../Pages/Connexion/Connexion'
import Footer from '../../Layout/Footer/Footer'
import Newaccount from '../../Pages/Newaccount/Newaccount'
import Knitlist from '../../Pages/Projets/Knitlist'
import InProgress from '../../Pages/Projets/Inprogress'
import Needle from '../../Pages/Inventaire/Aiguilles'
import Stash from '../../Pages/Inventaire/Stash'
import Finish from '../../Pages/Projets/Finish'
import Map from '../../Pages/Mercerie/Map'
import Video from '../../Pages/YouTube/Tutovideo'
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
                <Route path="/Knitlist" element={<Knitlist/>}/>
                <Route path="/InProgress" element={<InProgress/>}/>
                <Route path="/Finish" element={<Finish/>}/>
                <Route path="/Needle" element={<Needle/>}/>
                <Route path="/Stash" element={<Stash/>}/>
                <Route path="/Map" element={<Map/>}/>
                <Route path="/Video" element={<Video/>}/>
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/Newaccount" element={<Newaccount/>}/>
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default MyRouter