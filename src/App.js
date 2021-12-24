import { Routes, Route } from "react-router-dom";
import Composition from "./composition/composition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Composition />} />
    </Routes>
  );
}

export default App;
