import './HomePage.scss'
import { Link } from 'react-router-dom';
import cocoCay from '../../assets/images/coco-cay.jpg'

function Header() {
    return (
        <main className='home'>
            <h1 className='home__h1'>More than just a vacation</h1>
            <h2 className='home__h1'>Live Royal</h2>
            <Link to='/onboarding'><button className='home__button'>Find my Trip</button></Link>
        </main>
    )
}

export default Header;