import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1 style={styles.title}>Ma Cinémathèque</h1>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Accueil</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/wishlist" style={styles.link}>Wishlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#222',
    padding: '10px 20px',
    color: '#fff',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
