import { Link } from "react-router-dom";
import '../styles.css';

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <h2>CommunionHub</h2>
      <div>
        <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
