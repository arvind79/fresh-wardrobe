import { Link } from 'react-router-dom';

import './style.css';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi';
import {BiLogoTwitter} from 'react-icons/bi';
import {AiOutlineInstagram} from 'react-icons/ai';

import TruckLogo from '../../assets/images/truck.svg'

const TopNav = () => {
  return (
    <div className="topnav-container flex">
      <img src={TruckLogo} alt="Truck Logo" />
      <div className="left-side flex">  
        <span>Free Delivery</span>
        <span>|</span>
        <span>Return Policy</span>
      </div>

      <div className="right-side flex">
        <Link to='/' className="login">Login</Link>
        <Link to='/' className="follow">Follow Us</Link>
        <ul className='flex'>
          <li><BiLogoFacebook /></li>
          <li><BiLogoLinkedin /></li>
          <li><BiLogoTwitter /></li>
          <li><AiOutlineInstagram /></li>
        </ul>
      </div>
    </div>
  )
}

export default TopNav;