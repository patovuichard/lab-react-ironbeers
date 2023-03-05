import { NavLink } from "react-router-dom";

function Navbar() {
  const container = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={container}>
      <div>
        <NavLink to={"/beers"}>
          <img src={"./beers.png"} alt="all-beers" width={"100%"} />
          <div style={{textAlign: "left" }}>
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae qui impedit obcaecati autem ut, inventore sunt
              recusandae in corporis? Atque modi veritatis excepturi a debitis
              eum quos eos earum. Sit?
            </p>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/random-beer"}>
          <img src={"./random-beer.png"} alt="random-beer" width={"100%"} />
          <div style={{textAlign: "left" }}>
            <h2>Random Beers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae qui impedit obcaecati autem ut, inventore sunt
              recusandae in corporis? Atque modi veritatis excepturi a debitis
              eum quos eos earum. Sit?
            </p>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to={"/new-beer"}>
          <img src="./new-beer.png" alt="new-beer" width={"100%"} />
          <div style={{textAlign: "left" }}>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae qui impedit obcaecati autem ut, inventore sunt
              recusandae in corporis? Atque modi veritatis excepturi a debitis
              eum quos eos earum. Sit?
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
