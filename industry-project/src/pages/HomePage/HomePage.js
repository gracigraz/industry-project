import './HomePage.scss'
import { Link } from 'react-router-dom';
import cocoCay from '../../assets/images/coco-cay.jpg'

function Header() {
    return (
        <main className='home'>
            <h1 className='home__h1'>Perfect Getway</h1>
            <Link to='/onboarding'><button className='home__button'>Find my Trip</button></Link>
        </main>
    )
}

export default Header;