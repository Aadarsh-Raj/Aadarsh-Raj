import React, { useState, useEffect } from "react";
import Main from "./Components/Main";
import AnimationSection from "./Components/AnimationSection";

function App() {
  const [welcome, setWelcome] = useState(<AnimationSection />);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(() => "");
    }, 4000);
  }, []);

  return (
    <>
      {welcome == "" ? (
          <Main />
      ) : (
        welcome
      )}
    </>
  );
}

export default App;
