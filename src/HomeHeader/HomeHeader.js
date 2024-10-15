import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="banner">
      <h1 className="header">Carma</h1>
      <h5 className="quote">Good Rides, Good Carma.</h5>
      <div className="search">
        <input className="input" placeholder="Search Your Location"></input>
        <button>Search</button>
      </div>
    </div>
  );
};

export default HomeHeader;
