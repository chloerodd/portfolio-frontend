import { Link } from "react-router-dom";

function Header(props) {
    //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid #f4c2e1",
    padding: "8px",
    width: "90%",
    margin: "auto",
    background: "#168046",
  };
  const linkStyle = {
    color: "#f4c2e1", 
    textDecoration: "none", 
  };

    return (
        <header>
            <nav style={navStyle}>
            <Link to="/" style={linkStyle}>
            <div>HOME</div>
            </Link>
            <Link to="/about" style={linkStyle}>
            <div>ABOUT</div>
            </Link>
            <Link to="/projects" style={linkStyle}>
            <div>PROJECTS</div>
            </Link>
            </nav>
        </header>
    )
};
  
export default Header;