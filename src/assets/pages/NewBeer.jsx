import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const { navigate } = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/neww",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      navigate("/error");
    }
  };

  return (
    <div>
      <header style={{ backgroundColor: "lightblue", padding: "10px" }}>
        <NavLink to="/">🏠</NavLink>
      </header>
      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <br />
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed</label>
        <br />
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={(event) => setFirst_brewed(event.target.value)}
        />
        <br />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <br />
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={(event) => setBrewers_tips(event.target.value)}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <br />
        <input
          type="text"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(event) => setAttenuation_level(event.target.value)}
        />
        <br />
        <label htmlFor="contributed_by">Contribuited By</label>
        <br />
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={(event) => setContributed_by(event.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmitForm}>Add New</button>
      </form>
    </div>
  );
}

export default NewBeer;
