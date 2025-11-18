import { Link } from "react-router-dom";
// import "./MathsTopics.css";
import "./l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-m-a-t-h-s.css";

const MathsTopics = () => {
  return (
    <div className="maths-container">
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
            
            <Link to="/list-of-topics-page-for-chem" className="subject-link">
              <button className="subject-btn">CHEMISTRY</button>
            </Link>
            
            <button className="subject-btn active">MATHS</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-section">
          {/* Maths Topics */}
          <div className="topics-section">
            <h2 className="section-title">LIST OF MATHS TOPICS</h2>
            <div className="topics-list">
              <button className="topic-btn">Relations and Functions</button>
              <button className="topic-btn">Matrices</button>
              <button className="topic-btn">Determinants</button>
              <button className="topic-btn">Continuity and Differentiability</button>
              <button className="topic-btn">Application of Derivatives</button>
              <button className="topic-btn">Integrals</button>
              <button className="topic-btn">Application of Integrals</button>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="instructions-section">
            <h2 className="section-title">MATHS Instructions:</h2>
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

export default MathsTopics;