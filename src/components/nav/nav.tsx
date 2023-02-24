import { Link } from 'react-router-dom';
import '../nav/nav.scss';

export const Nav =() => {

    return( <div className="nav-container">
        <nav className="nav-container__flex">
            <ul className="nav-container__flex__list">
                <li className="nav-container__flex__list__item">
                <Link to="/" className="nav-container__flex__list__item__link">Hem</Link></li>
                <li className="nav-container__flex__list__item">
                <Link to="/projects" className="nav-container__flex__list__item__link">Projekt</Link></li>
                <li className="nav-container__flex__list__item">
                <Link to="/" className="nav-container__flex__list__item__link">Om</Link></li>
            </ul>
        </nav>
     </div>
     )
}
