import Navbar from './components/Navbar/navbar';
import DashboardImage from './image/Dashboard_img.svg';
import './index.css';

function App() {
  return (
    <>
      
      <h1>Hi, Jacqueline !</h1>
      
      <div className="image-container">
        <img src={DashboardImage} alt="image_fitness_in_dashboard" />
      </div>

        <div className="flex-container">
          <h2>Dein Workout heute</h2>
          <h3>Trainingsplan </h3>
        </div>


        <div className= 'programm'>
          <p> Tag 2</p>
          <h4>Titel des Programms </h4>
          <h5> 26 Min - Beweglichkeit </h5>

        </div>
      <Navbar/>
    </>
  );
}

export default App;
