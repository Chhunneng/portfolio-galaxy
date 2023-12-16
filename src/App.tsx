import "./App.scss";
import Homepage from "./modules/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import MyCV from "./modules/my-cv/my-cv";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/my-cv" element={<MyCV />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
