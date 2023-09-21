import './style.css';
import largeStar from '../../assets/images/large-star.svg';
import coverModel from '../../assets/images/cover-model.png'
import smallStar from '../../assets/images/small-star-3.svg';
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1 className="title-1">Fresh</h1>
        <h1 className="title-2">2022</h1>
        <h1 className="title-3">Look</h1>
      </div>

      <div className="model-container">
        <div className="model">
          <img src={largeStar} className='large-star' alt="large star img" />
          <img src={coverModel} className='model-img' alt="cover model img" />
        </div>
      </div>

      <div className="orange-box"></div>
      <div className="blur-box"></div>

      <div className="line-star-container">
        <div className="line"></div>
        <img src={smallStar} className='small-star' alt="small star" />
      </div>

      <div className='btn-container'>
        <button className='see-more'>See More</button>
        <FiArrowUpRight />
      </div>
    </div>
  )
}

export default Hero;