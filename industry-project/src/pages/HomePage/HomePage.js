import './HomePage.scss'
import cocoCay from '../../assets/images/coco-cay.jpg'

function Header() {
    return (
        <main className='home'>
            <img className='home__hero' src={cocoCay} alt='Cruise anchored at CocoCay, a Royal Caribbean private island' />
        </main>
    )
}

export default Header;