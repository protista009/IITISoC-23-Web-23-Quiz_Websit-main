import "bootstrap/dist/css/bootstrap.min.css";
import './frame-component.css';
import { Link } from 'react-router-dom';

const PhysicsTopics = () => {
  return (
    <div className="physics-container">
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
            <button className="subject-btn active">PHYSICS</button>
            
            {/* Chemistry Button with Link */}
            <Link to="/list-of-topics-page-for-chem" className="subject-link">
              <button className="subject-btn">CHEMISTRY</button>
            </Link>
            
            {/* Maths Button with Link */}
            <Link to="/list-of-topics-page-for-maths" className="subject-link">
              <button className="subject-btn">MATHS</button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-section">
          {/* Physics Topics */}
          <div className="topics-section">
            <h2 className="section-title">LIST OF PHYSICS TOPICS</h2>
            <div className="topics-list">
              <button className="topic-btn">Electric Charges & Fields</button>
              <button className="topic-btn">Current Electricity</button>
              <button className="topic-btn">Moving Charges and Magnetism</button>
              <button className="topic-btn">Magnetism And Matter</button>
              <button className="topic-btn">Electromagnetic Induction</button>
              <button className="topic-btn">Alternating Current</button>
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
            <button className="start-quiz-btn">Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicsTopics;