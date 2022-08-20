import "./App.css";
import BackGround from "./components/back-ground";
import MainContent from "./components/main-content";
import AboutIcon from "./components/about-icon";
import AboutText from "./components/about-text";
import { useState } from "react";

function App() {
  const [showAboutText, setShowAboutText] = useState(false);
  const closeAboutText = () => setShowAboutText(false);
  const oppenAboutText = () => setShowAboutText(true);
  return (
    <div className="App">
      <BackGround />
      <div className="relative z-50">
        <MainContent />
        <AboutIcon oppenAboutText={oppenAboutText} />

        {showAboutText && <AboutText closeAboutText={closeAboutText} />}
      </div>
    </div>
  );
}

export default App;
