import LogoFooter from '../../assets/logo.png'
import './footer.scss'


function Footer() {
    return (
        <div className="footer">
            <img className="footerlogo" src={LogoFooter} alt="Logo Footer" />
            <div className="copyfooter">
                <p className="copyright">
                    Designed and built by Delphine Barrabes Salmon
                </p>
                <p className="copyright ">
                    © Copyright 2025 - Delphine Barrabes Salmon
                </p>
            </div>
        </div>
    )
}

export default Footer