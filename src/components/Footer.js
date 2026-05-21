import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shreeva-logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Shreeva" />
              <span>SHREEVA</span>
            </Link>
            <p className="footer-tagline">India's premier Hip Hop Jewellery brand. Design, feel, look and present the way you want.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/shreeva_jewels/" target="_blank" rel="noreferrer" className="social-btn">IG</a>
              <a href="https://wa.me/9279921642" target="_blank" rel="noreferrer" className="social-btn">WA</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn">YT</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop?type=Ring">Engagement Rings</Link></li>
              <li><Link to="/shop?type=Ring">Wedding Bands</Link></li>
              <li><Link to="/shop?type=Earring">Earrings</Link></li>
              <li><Link to="/shop?type=Bracelet">Bracelets</Link></li>
              <li><Link to="/shop?type=Pendant">Necklaces & Pendants</Link></li>
              <li><Link to="/shop">All Products</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Info</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/warranty">Warranty</Link></li>
              <li><Link to="/custom">Custom Work</Link></li>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/orders">My Orders</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Visit Us</h4>
            <address className="footer-address">
              <strong>SHREEVA Surat</strong>
              Aagam Viviana<br />
              Vesu Main road<br />
              Surat, Gujarat, 395007
            </address>
            <p className="footer-ship-note">🌏 Worldwide Shipping Available</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} SHREEVA — Way You Want India. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/returns">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
