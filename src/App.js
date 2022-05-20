import { UseRef } from "./UseRef/UseRef";
import { Routes, Route } from "react-router-dom";
import Composition from "./composition/composition";
import Optimized from "./optimized-react/Optimized";
import Optimized2 from "./optimized-react/Optimized";
import Shared from "./share-state-with-hooks/App";
import { FetchData } from "./share-state-with-hooks/fetch-data";
import { UseEffectBug } from "./useEffectBug/UseEffectBug";
import { UseEffectNote } from "./useEffectBug/useEffectNote";
import { RenderProps } from "./InversionOfControl/RenderProps";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UseEffectNote />} />
      <Route path="/optimized" element={<Optimized />} />
      <Route path="/optimized2" element={<Optimized2 />} />
      <Route path="/shared-state" element={<Shared />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/bug-with-useeffect" element={<UseEffectBug />} />
      <Route path="/useref"  element={<UseRef />} />
      <Route path="/render"  element={<RenderProps/>} />
    </Routes>
  );
}

export default App;
