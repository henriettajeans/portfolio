import { Link } from "react-router-dom"
import './footer.scss'

export const Footer =()=>{

    
    return(
        <section className="footer-container">
            <section className="footer-container__name">
                <span className="footer-container__name__first">Henrietta</span>
                <span className="footer-container__name__last">Jeansson</span>
            </section>
            <section className="footer-container__mail">
                <Link to="mailto:henrietta.jeansson@medieinstitutet.se" className="footer-container__mail__1">henrietta.jeansson</Link>
                <Link to="mailto:henrietta.jeansson@medieinstitutet.se" className="footer-container__mail__2">@medieinstitutet.se</Link>
            </section>
        </section>
    )
}