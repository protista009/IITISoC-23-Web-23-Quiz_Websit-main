import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import LISTOFTOPICSPAGEFORCHEM from "./pages/chempage";
import LISTOFTOPICSPAGEFORMATHS from "./pages/mathspage";
import FrameComponent from "./pages/frame-component";

import ProfilePage from "./pages/prof/ProfilePage"
import LoginPage11 from "./pages/loginp/LoginPage11";
// import Quiznew from "./pages/quiznew";
import Homepage from "./pages/home/HomePage";
// import Interval from "./pages/time";
import SolidStatesQuiz from "./pages/SolidStatesQuiz";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/chempage":
        title = "";
        metaDescription = "";
        break;
      case "/mathspage":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* <Route path="/" element ={<LoginPage11 />} /> */}
       <Route path="/" element={<ProfilePage/>}/>
      <Route path="/home" element={<Homepage />} />

      <Route path="/chempage"
        element={<LISTOFTOPICSPAGEFORCHEM />}
      />
      {/* <Route path="/time"
        element={<Interval />}
      /> */}
      <Route path="/SolidStatesQuiz"
       element={<SolidStatesQuiz />} />
      
      
      <Route
        path="/mathspage"
        element={<LISTOFTOPICSPAGEFORMATHS />}
      />
    
      <Route path="/frame-6" element={<FrameComponent />} />
    </Routes>

  );
}
export default App;
