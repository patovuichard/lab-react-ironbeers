import { NavLink } from "react-router-dom";

function Navbar() {
  const container = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
  }
  return (
    <div style={container}>
      <div>
        <NavLink to={"/beers"}>
          <img src={"../beers.png"} alt="beer" />
          <h4>All Beers</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui impedit obcaecati autem ut, inventore sunt recusandae in corporis? Atque modi veritatis excepturi a debitis eum quos eos earum. Sit?</p>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/random-beer"}>
          <img src="./random-beer.png" alt="random" />
          <h4>Random Beers</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui impedit obcaecati autem ut, inventore sunt recusandae in corporis? Atque modi veritatis excepturi a debitis eum quos eos earum. Sit?</p>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/new-beer"}>
          <img src="./random-beer.png" alt="new" />
          <h4>New Beer</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui impedit obcaecati autem ut, inventore sunt recusandae in corporis? Atque modi veritatis excepturi a debitis eum quos eos earum. Sit?</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
