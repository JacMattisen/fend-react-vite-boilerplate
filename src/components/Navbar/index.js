import './navbar.css';
import { Link } from 'react-router-dom'

function Navbar(){
  return(
    <header>
      <Link className="home" to="/"></Link>
      <Link className="exercises" to="/exercises"></Link>
      <Link className="profil" to="/profil"></Link>
    </header>
  )
}

export default Navbar;