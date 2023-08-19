import Photo from '../per.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    return(
        <header>
            <div className='header-img'> 
                <img src={Photo}  />
            </div>
            <div className='intro'>
                <h2>Prashamsha Prash</h2>
                <h5>Frontend Developer</h5>
                <h6>prasah.website</h6>
            </div>
            <div className='social-links'> 
                <button className='btn1'> <FontAwesomeIcon icon={faEnvelope} className='faE' />Email</button>
                <button className='btn2'><FontAwesomeIcon icon={faLinkedin}  className='faL'/> LinkedIn</button>
            </div>
           
        </header>
    )
}