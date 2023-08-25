import './HomePage.scss'
import { Link } from 'react-router-dom';
import cocoCay from '../../assets/images/coco-cay.jpg'

function HomePage() {
    return (
        <main className='home'>
            <section className='home__hero'>
            <h1 className='home__h1'>More than just a vacation</h1>
            <Link to='/onboarding'><button className='home__button'>Find my Trip</button></Link>
            </section>
            <h2 className='home__h2'>Live Royal</h2>
            <p className='home__p'>"Royal Caribbean is not just a cruise line, but a gateway to unforgettable adventures and unparalleled experiences at sea. With a legacy spanning decades, we're known for redefining the concept of cruising, offering the perfect blend of luxury, innovation, and entertainment. From world-class entertainment and delectable dining options to thrilling onboard activities and stunning destinations, Royal Caribbean is the ultimate way to explore the world's oceans. Join us for a journey that goes beyond the ordinary, where every moment is designed to leave you with memories that last a lifetime."</p>
        </main>
    )
}

export default HomePage;