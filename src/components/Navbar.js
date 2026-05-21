import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import logo from '../assets/shreeva-logo.png';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Engagement Rings', to: '/shop?type=Ring' },
  { label: 'Wedding Bands', to: '/shop?type=Ring' },
  { label: 'Earrings', to: '/shop?type=Earring' },
  { label: 'Bracelets', to: '/shop?type=Bracelet' },
  { label: 'Necklaces & Pendants', to: '/shop?type=Pendant' },
  { label: 'Custom Design', to: '/custom' },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Shreeva" />
          <span>Shreeva</span>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(link => <li key={link.label}><Link to={link.to}>{link.label}</Link></li>)}
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="navbar-actions">
          {user ? (
            <div className="navbar-user">
              <span className="navbar-user-name">{user.name.split(' ')[0]}</span>
              <div className="navbar-dropdown">
                <Link to="/account">My Account</Link>
                <Link to="/orders">My Orders</Link>
                {user.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="navbar-login">Login</Link>
          )}
          <Link to="/cart" className="navbar-cart">
            <span className="cart-icon">🛒</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="hamburger" onClick={() => setMenuOpen(m => !m)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
