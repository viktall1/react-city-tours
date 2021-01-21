// import logo from './logo.svg';
import './App.scss';
import  NavBar  from "./components/NavBar/NavBar";
import TourList from "./components/Tour/TourList";
function App() {
  return (
    <div className="App">
    <NavBar/>
      <TourList/>
    </div>
  );
}

export default App;
