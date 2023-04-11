import { Link } from "react-router-dom"
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsFileEarmarkText } from "react-icons/bs"

import './about.scss';

export const About = () => {
    return (
        <div className="about-container" >
            <h1 className="about-container__title">Lite om mig</h1>
            <div className="about-container__wrapper">

                <div className="about-container__wrapper__line"></div>
                <p className="about-container__wrapper__desc">
                    Som student vid Medieinstitutet strävar jag efter att utveckla mina färdigheter för att bli en framgångsrik webbutvecklare.
                    Som person är jag social och trevlig, alltid öppen för nya idéer och tekniker och arbetar hårt för att förbättra mig själv och bygga upp min portfölj.
                    Med en positiv inställning och engagemang inom webbutveckling ser jag ljust på min framtid inom området.
                </p>
                <div className="about-container__wrapper__line"></div>
                <div className="about-container__wrapper__collection">
                    <Link to="/resume" className="about-container__wrapper__collection__link"><p className="about-container__wrapper__collection__link__text">
                        <BsFileEarmarkText className="about-container__wrapper__collection__link__icon" /> Spana in mitt cv  </p >
                    </Link>
                    <Link to="https://www.linkedin.com/in/henrietta-jeansson/" className="about-container__wrapper__collection__link">

                        <p className="about-container__wrapper__collection__link__text">
                            <BsLinkedin className="about-container__wrapper__collection__link__icon" /> My linkedin profile right here</p>
                    </Link>
                    <Link to="https://github.com/henriettajeans" className="about-container__wrapper__collection__link">
                        <p className="about-container__wrapper__collection__link__text"><VscGithubInverted className="about-container__wrapper__collection__link__icon" /> Check out my </p>
                    </Link>
                </div>
                <div className="about-container__wrapper__line"></div>
            </div>
        </div>
    )
}