import './style.css';
import TopNav from '../topNav/TopNav';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';

const Header = () => {
  return (
    <>
      <TopNav />
      <div className='header'>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default Header;