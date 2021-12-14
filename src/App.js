import GUI from "lil-gui";
import { useEffect, useState } from "react";
import "./App.css";
import album_cover_case from "./assets/album-cover-case.png";
import album_cover_color from "./assets/album-cover-color.png";
import album_cover_glow from "./assets/album-cover-glow.png";
import album_cover_innershadow from "./assets/album-cover-innershadow.png";
import album_cover_maskcorner from "./assets/album-cover-maskcorner.png";
import album_cover_surfaceshadow from "./assets/album-cover-surfaceshadow.png";
import album_rear_case from "./assets/album-rear-case.png";
import album_rear_color from "./assets/album-rear-color.png";
import album_rear_glow from "./assets/album-rear-glow.png";
import album_rear_innershadow from "./assets/album-rear-innershadow.png";
import fake_01 from "./assets/fake_01.jpg";
import fake_02 from "./assets/fake_02.png";
import fake_03 from "./assets/fake_03.jpeg";
import fake_04 from "./assets/fake_04.png";
import fake_05 from "./assets/fake_05.jpg";
import fake_06 from "./assets/fake_06.png";
import fake_07 from "./assets/fake_07.png";
import fake_08 from "./assets/fake_08.jpg";
import fake_09 from "./assets/fake_09.jpg";

const object = {
  hue: 0,
  saturation: 100,
  contrast: 100,
  brightness: 100,
  imageIndex: 0,
};

const images = [
  fake_01,
  fake_02,
  fake_03,
  fake_04,
  fake_05,
  fake_06,
  fake_07,
  fake_08,
  fake_09,
];

function App() {
  const [hue, setHue] = useState(object.hue);
  const [saturation, setSaturation] = useState(object.saturation);
  const [contrast, setContrast] = useState(object.contrast);
  const [brightness, setBrightness] = useState(object.brightness);
  const [imageIndex, setImageIndex] = useState(object.imageIndex);

  useEffect(() => {
    const gui = new GUI();

    const caseFolder = gui.addFolder("case");
    const albumCoverFolder = gui.addFolder("albumCover");

    caseFolder.add(object, "hue", 0, 360, 1).onChange((value) => setHue(value));

    caseFolder
      .add(object, "saturation", 0, 200, 1)
      .onChange((value) => setSaturation(value));

    albumCoverFolder
      .add(object, "imageIndex", 0, 8, 1)
      .onChange((value) => setImageIndex(value));

    caseFolder
      .add(object, "contrast", 0, 200, 1)
      .onChange((value) => setContrast(value));

    caseFolder
      .add(object, "brightness", 0, 200, 1)
      .onChange((value) => setBrightness(value));

    return () => {
      gui.destroy();
    };
  }, []);

  const coverImage = images[imageIndex];

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-wrapper">
          {/* REAR */}
          <img
            src={album_rear_case}
            className="rear-image"
            style={{
              filter: `contrast(${contrast}%) brightness(${brightness}%`,
            }}
          />
          <img
            src={album_rear_color}
            className="rear-image"
            style={{
              filter: `hue-rotate(${hue}deg) saturate(${saturation}%)`,
            }}
          />
          <img
            src={album_rear_innershadow}
            className="rear-image innershadow"
          />
          <img src={album_rear_glow} className="rear-image glow" />

          {/* FRONT */}
          <span className="album-cover">
            <img src={coverImage} className="album-cover-child" />
          </span>

          <img src={album_cover_maskcorner} className="image" />

          <img
            src={album_cover_case}
            className="image case"
            style={{
              filter: `contrast(${contrast}%) brightness(${brightness}%)`,
            }}
          />
          <img
            src={album_cover_color}
            className="image color"
            style={{
              filter: `hue-rotate(${hue}deg) saturate(${saturation}%)`,
            }}
          />
          <img src={album_cover_glow} className="image glow" />
          <img
            src={album_cover_surfaceshadow}
            className="image surfaceshadow"
          />
          <img src={album_cover_innershadow} className="image innershadow" />
        </div>
      </header>
    </div>
  );
}

export default App;
