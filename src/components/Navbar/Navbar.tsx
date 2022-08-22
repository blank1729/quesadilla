import './Navbar.css'
import { FaCartPlus, FaRegUserCircle } from 'react-icons/fa';
import logoImg from '../../assets/logo.svg'
import Menu from '../../pages/Menu/Menu';

function Navbar(){
    // create a array using usestate to list elements that go into the nav-items
    // properties for the nav-items 1.name 2.class-name 3.link
    return(
        <div className="navbar">
            <header>
                <img src={logoImg} alt="logo" style={{width: '3rem',}} className="logo"/>
                <input type="text" />
                <nav>
                    <div className='nav-links'>
                        <span className='navl'>Home</span>
                        <span className='navl'><a href="#menu">Menu</a></span>
                    </div>
                    <div className='nav-icons'>
                        <span className='navi profile'><FaRegUserCircle /></span>
                        <span className='navi cart'><FaCartPlus /><span>0</span></span>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar