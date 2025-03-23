import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <header style={{ textAlign: "center", padding: "50px" }}>
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <button onClick={() => navigate("/events")}>Explore Events</button>
      </header>
    </div>
  );
};

export default Home;
