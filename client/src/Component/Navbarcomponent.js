import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getUsername, logout } from '../service/authorize';
import { useNavigate } from 'react-router';

function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary col-sm container-fluid"
      style={{ backgroundColor: 'rgb(19, 21, 17)' }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Physics Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!getUsername() && <Nav.Link href="/login">login</Nav.Link>}
            {getUsername() && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/uploadFreeVideos">
                  uploadFreeVideo
                </NavDropdown.Item>
                <NavDropdown.Item href="/adminCourses">
                  UploadCourse
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <NavDropdown title="Course" id="basic-nav-dropdown">
              <NavDropdown.Item href="/middleCourse">
                Junior's Courses
              </NavDropdown.Item>
              <NavDropdown.Item href="/freeVideos">
                Free Courses
              </NavDropdown.Item>
            </NavDropdown>
            {getUsername() && (
              <Nav.Link
                href="/"
                onClick={() => {
                  logout(() => navigate('/'));
                }}
              >
                logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
