import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

function SingleBeer(props) {
  const navigate = useNavigate()
  const params = useParams()
  // console.log(params)
  const [singleBeer, setSingleBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
      );
      // console.log(response.data);
      setSingleBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      navigate("/error")
    }
  };

  if (isFetching === true) {
    return (
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center"  }}>
        <RingLoader color="#d63636" size={60} />
      </div>
    );
  }

  return (
    <div>
      <header style={{ backgroundColor: "rgb(0, 153, 255)", padding: "10px"}}>
        <NavLink to="/">🏠</NavLink>
      </header>
      <img src={singleBeer.image_url} alt="img" style={{paddingTop: "40px", width: "100px"}}  />
      <div
        style={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignText: "left",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{singleBeer.name}</h3>
          <br />
          <h3>{singleBeer.attenuation_level}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between"  }}>
          <h5>{singleBeer.tagline}</h5>
          <h5>{singleBeer.first_brewed}</h5>
        </div>
        <p>{singleBeer.description}</p>
        <h5>{singleBeer.cotributed_by}</h5>
      </div>
    </div>
  );
}

export default SingleBeer;
