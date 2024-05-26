import home from "../../image/home.png";
import exercises from "../../image/exercises.png";
import profil from "../../image/profil.png";
import styles from './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <footer className={styles.navbar}>
      {/* <div className={styles.linkContainer}> */}
      <Link className="home" to="/"> <img src={home} alt="logo-home" /> </Link>
      <Link className="exercises" to="/exercises"> <img src={exercises} alt="logo-exercises" /> </Link>
      <Link className="profil" to="/profil"> <img src={profil} alt="logo-profil" /> </Link>
      {/* </div> */}
    </footer>
  )
}

export default Navbar;