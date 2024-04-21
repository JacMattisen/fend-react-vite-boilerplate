import styles from './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <footer className= {styles.navbar}>
      <Link className="home" to="/"> Home </Link>
      <Link className="exercises" to="/exercises"> Exercises </Link>
      <Link className="profil" to="/profil"> Profil </Link>
    </footer>
  )
}

export default Navbar;