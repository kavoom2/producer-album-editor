import GUI from "lil-gui";
import { useEffect, useState } from "react";
import "./App.css";
import fake_03 from "./assets/fake_03.jpeg";
import DynamicKitCase from "./DynamicKitCase";

const object = {
  sideColor: "#99C1BB",
  topColor: "#A5CAFB",
};

function App() {
  const [sideColor, setSideColor] = useState(object.sideColor);
  const [topColor, setTopColor] = useState(object.topColor);

  useEffect(() => {
    const gui = new GUI();

    gui.add(object, "sideColor").onChange((value) => setSideColor(value));

    gui.add(object, "topColor").onChange((value) => setTopColor(value));

    return () => {
      gui.destroy();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <DynamicKitCase
          sideColor={sideColor}
          topColor={topColor}
          imageUrl={fake_03}
          isIamgeExist={true}
        />
      </header>
    </div>
  );
}

export default App;
