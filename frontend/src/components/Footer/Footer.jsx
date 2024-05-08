import './Footer.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <a href='#navbar'><img src={assets.logo} alt=""  /></a>
                <p>
                Order your favourite food here
                </p>
                <div className="footer-social-icons">
                    <a href='https://www.linkedin.com/in/harsh-dhoke-23a6a81a8/'><img src={assets.linkedin_icon} alt="" /></a>
                    <a href='https://twitter.com/Harsh__Dhoke'><img src={assets.twitter_icon} alt=""  /></a>
                    <a href='https://www.facebook.com/harsh.dhoke.79/'><img src={assets.facebook_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <a href='#navbar'><li>Home</li></a>
                    <a href='https://harsh-dhoke-portfolio-main.netlify.app/'><li>About Us</li></a>
                    <li onClick={()=>navigate('/myorders')}>Delivery</li>
                    <a href='https://www.instagram.com/the_harsh_dhoke/'><li>Privacy Policy</li></a>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>
                    GET IN TOUCH
                </h2>
                <ul>
                    <a href='tel:+919158524227'><li>+91 9158524227</li></a>
                    <a href='mailto:harshdhoke0@gmail.com'><li>harshdhoke0@gmail.com</li></a>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 @ YummyTummy - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer