import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.css";  // Normal CSS import

const HomePage = () => {
  return (
    <div className="homeWrapper">
      <div className="homePage">
        <div className="profileContainer">
          <Link to="/prof">
            <img 
              src="/ellipse-2@2x.png" 
              alt="Profile" 
              className="profileIcon" 
            />
          </Link>
        </div>

        {/* Header Section */}
        <header className="header">
          <div className="logo">QUIZZYlicious</div>
          <nav className="navLinks">
            <Link to="/contact" className="navLink">Contact</Link>
            <Link to="/about" className="navLink">About us</Link>
            <div className="authButtons">
              <Link to="/admin-login" className="adminLink">Are you an admin?</Link>
              <Link to="/login" className="loginButton">Login</Link>
              <Link to="/signup" className="signupButton">Sign up</Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="mainContent">
          <div className="welcomeSection">
            <h1 className="welcomeTitle">WELCOME TO QUIZZYLICIOUS!</h1>
            <p className="welcomeSubtitle">Try Test Analyse Learn...</p>
          </div>

          {/* Subject Buttons */}
          <div className="subjectButtons">
            <Link to="/frame-6" className="subjectLink">
              <Button className="subjectButton physics" variant="primary">
                PHYSICS
              </Button>
            </Link>
            
            <Link to="/list-of-topics-page-for-chem" className="subjectLink">
              <Button className="subjectButton chemistry" variant="primary">
                CHEMISTRY
              </Button>
            </Link>
            
            <Link to="/list-of-topics-page-for-maths" className="subjectLink">
              <Button className="subjectButton maths" variant="primary">
                MATHEMATICS
              </Button>
            </Link>
          </div>

          {/* Trending Topics */}
          <div className="trendingSection">
            <h2 className="trendingTitle">TRENDING TOPICS!</h2>
            <div className="topicGrid">
              <div className="topicCard">
                <img src="/rectangle-18@2x.png" alt="Topic 1" className="topicImage" />
              </div>
              <div className="topicCard">
                <img src="/rectangle-21@2x.png" alt="Topic 2" className="topicImage" />
              </div>
              <div className="topicCard">
                <img src="/rectangle-24@2x.png" alt="Topic 3" className="topicImage" />
              </div>
              <div className="topicCard">
                <img src="/rectangle-25@2x.png" alt="Topic 4" className="topicImage" />
              </div>
              <div className="topicCard">
                <img src="/rectangle-26@2x.png" alt="Topic 5" className="topicImage" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
