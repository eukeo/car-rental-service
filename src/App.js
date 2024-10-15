import "./App.css";
import Navigation from "./NavBar/NavBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import Vehicles from "./Vehicles/Vehicles";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeHeader />
      <Vehicles />
    </div>
  );
}

export default App;
