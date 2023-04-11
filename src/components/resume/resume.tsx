import '../../assets/henriettajeansson.jpg'
import './resume.scss'

export const Resume = () => {
    return (
        <div className='img-wrapper'>
            <h1 className='img-wrapper__title'>CV</h1>
            <p className='img-wrapper__desc'>Open a PDF file .</p>
            <img className='img-wrapper__src' src={require("../.././assets/henriettajeansson.jpg")} alt="Henrietta Jeansson skriftligt cv" />
        </div>
    )
}