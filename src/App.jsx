import Navbar from './components/Navbar/navbar';
import DashboardImage from './image/Dashboard_img.svg';
import './index.css';

function App() {
  return (
    <>
      
      <h1 className= "text-2xl font-bold text-white mt-6 ml-2 w-64 h-12">Hi, Jacqueline !</h1>
      
      <div >
        <img className="h-30 w-56 mt-0 ml-9" src={DashboardImage} alt="image_fitness_in_dashboard" />
      </div>

        <div className="flex content-between items-center">
          <h2 className= "text-lg leading-9 font-bold text-white  w-69 h-9 mt-6 ml-3 ">Dein Workout heute</h2>
          <label className="text-sm font-normal text-xs text-white w-20 h-3.5 mt-7 ml-6 text-end">Trainingsplan </label>
        </div>


        <div className= "flex flex-col justify-end min-w-72 w-96 h-52 rounded-3xl mx-5 bg-slate-700">
          <h3 className= "text-lg leading-6 font-bold text-white "> Tag 2</h3>
          <h2 className= "text-white">Titel des Programms </h2>
          <label> 26 Min - Beweglichkeit </label>

        </div>
      <Navbar/>
    </>
  );
}

export default App;
