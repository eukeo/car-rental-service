import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="banner">
      <div className="search">
        <h5>Now renting in Los Angeles, Chicago and New York!</h5>
        <input className="input" placeholder="Search Your Location"></input>
        <button>Search</button>
      </div>
    </div>
  );
};

export default HomeHeader;
