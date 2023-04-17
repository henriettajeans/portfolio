import '../../assets/henriettajeansson.jpg'
import './resume.scss'

export const Resume = () => {
    return (
        <div className='img-wrapper'>
            <img className='img-wrapper__src' src={require("../.././assets/henriettajeansson.jpg")} alt="Henrietta Jeansson skriftligt cv" />
        </div>
    )
}