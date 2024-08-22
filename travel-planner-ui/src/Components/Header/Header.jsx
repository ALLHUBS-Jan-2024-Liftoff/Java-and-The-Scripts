import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><strong>Travel Planner</strong></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="nav-link">Profile</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">User</Nav.Link>
            <Nav.Link as={Link} to="/search-places" className="nav-link">Search Places</Nav.Link>
            <Nav.Link as={Link} to="/create-travel-plan" className="nav-link">Create Travel Plan</Nav.Link>
            <Nav.Link as={Link} to="/travel-plans" className="nav-link">Travel Plans</Nav.Link>
            <Nav.Link as={Link} to="/itinerary" className="nav-link">Itinerary</Nav.Link>
            <Nav.Link as={Link} to="/create-review" className="nav-link">Create Review</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="nav-link">Reviews</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;
