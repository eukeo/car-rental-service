import "./App.css";
import Navigation from "./NavBar/NavBar";
import HomeHeader from "./HomeHeader/HomeHeader";
import Vehicles from "./Vehicles/Vehicles";
import Locations from "./Locations/Locations";
import Reviews from "./Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeHeader />
      <Locations />
      <Vehicles />
      <Reviews />
    </div>
  );
}

export default App;
