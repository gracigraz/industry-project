import './Header.scss'
import logo from '../../assets/images/logo.svg'
import menuHeader from '../../assets/images/menu_header.svg'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav className='header'>
            <Link to='/' className='header__link'><img src={menuHeader} alt='Menu symbol' className='header__img-menu' /></Link>
            <Link to='/' className='header__link'><img src={logo} alt='Royal Caribbean Logo' className='header__img-logo' /></Link>            
        </nav>
    )
}

export default Header;