import { Routes, Route } from "react-router-dom";
import Composition from "./composition/composition";
import Optimized from "./optimized-react/Optimized";
import Optimized2 from "./optimized-react/Optimized";
import Shared from "./share-state-with-hooks/App";
import { FetchData } from "./share-state-with-hooks/fetch-data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Composition />} />
      <Route path="/optimized" element={<Optimized />} />
      <Route path="/optimized2" element={<Optimized2 />} />
      <Route path="/shared-state" element={<Shared />} />
      <Route path="/fetch" element={<FetchData />} />
    </Routes>
  );
}

export default App;
