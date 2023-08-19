import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub} from '@fortawesome/free-brands-svg-icons'
export default function Footer(){
    return(
        <footer>
            <ul className='social--links'>
                <li><FontAwesomeIcon icon={faSquareTwitter} ></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareFacebook} ></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareInstagram} ></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareGithub} ></FontAwesomeIcon></li>
            </ul>
        </footer>
        
    )
}