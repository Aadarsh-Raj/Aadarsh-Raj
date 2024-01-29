import React, { useState, useEffect } from "react";
import Main from "./Components/Main";
import AnimationSection from "./Components/AnimationSection";

function App() {
  const [welcome, setWelcome] = useState(<AnimationSection />);

  useEffect(() => {
    setTimeout(() => {
      setWelcome(() => "");
    }, 3000);
  }, []);
 
  return (
    <>
    {welcome == "" ? <div >
    <Main  />
    </div> : welcome}
   </>
  );
}

export default App;
