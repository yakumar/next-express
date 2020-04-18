import Link from 'next/link';
import styles from './header.module.scss';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
