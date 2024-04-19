import DashboardImage from './image/Dashboard_img.svg';
import './index.css';

function App() {
  return (
    <div>
      <h1>Hi, Jacqueline !</h1>
      <img src={DashboardImage} alt="image_fitness_in_dashboard" />
      <h2>Dein Workout heute</h2>
      <h3>Trainingsplan </h3>
    </div>
  );
}

export default App;
