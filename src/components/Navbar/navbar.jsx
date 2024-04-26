import home from "../../image/home.png";
import exercises from "../../image/exercises.png";
import profil from "../../image/profil.png";
import styles from './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <footer className={styles.navbar}>
      <Link className="home" to="/"> <img src={home} alt="" /> </Link>
      <Link className="exercises" to="/exercises"> <img src={exercises} alt="" /> </Link>
      <Link className="profil" to="/profil"> <img src={profil} alt="" /> </Link>
    </footer>
  )
}

export default Navbar;