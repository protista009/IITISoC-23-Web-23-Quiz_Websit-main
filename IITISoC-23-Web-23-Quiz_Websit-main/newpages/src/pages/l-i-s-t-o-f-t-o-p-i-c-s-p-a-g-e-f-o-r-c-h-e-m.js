import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-c-h-e-m.css";
import SolidStatesQuiz from "./SolidStatesQuiz";

const ChemistryTopics = () => {
  return (
    <div className="chemistry-container">
      {/* Background Image Div */}
      <div className="background-image"></div>
      
      {/* Content Container */}
      <div className="content-overlay">
        {/* Header Section */}
        <div className="header-section">
          <div className="profile-container">
            <Link to="/prof">
              <img 
                src="/ellipse-2@2x.png" 
                alt="Profile" 
                className="profile-image" 
              />
            </Link>
          </div>
          <h1 className="main-title">ONE LIFE...GO ACHIEVE!</h1>
          
          {/* Subject Navigation */}
          <div className="subject-navigation">
            <Link to="/frame-6" className="subject-link">
              <button className="subject-btn">PHYSICS</button>
            </Link>
            
            <button className="subject-btn active">CHEMISTRY</button>
            
            <Link to="/list-of-topics-page-for-maths" className="subject-link">
              <button className="subject-btn">MATHS</button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-section">
          {/* Chemistry Topics */}
          <div className="topics-section">
            <h2 className="section-title">LIST OF CHEMISTRY TOPICS</h2>
            <div className="topics-list">
               <Link to="/SolidStatesQuiz">
    <button className="topic-btn">The Solid States</button>
  </Link>
              <button className="topic-btn">Solutions</button>
              <button className="topic-btn">Electrochemistry</button>
              <button className="topic-btn">Chemical Kinetics</button>
              <button className="topic-btn">Surface Chemistry</button>
              <button className="topic-btn">Amines</button>
              <button className="topic-btn">Biomolecules</button>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="instructions-section">
            <h2 className="section-title">CHEMISTRY Instructions:</h2>
            <ul className="instructions-list">
              <li>The quiz will be of half an hour duration.</li>
              <li>You can attempt the quiz only once.</li>
              <li>There are a total of 10 questions.</li>
              <li>Each question carries one mark. No negative marking for wrong answers.</li>
              <li>Questions are of Multiple Choice.</li>
            </ul>
            <button className="start-quiz-btn">START QUIZ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemistryTopics;