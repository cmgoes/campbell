import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import { Information, ViewBase } from "./views";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ViewBase>
              <Information />
            </ViewBase>
          }
        />
      </Routes>
    </>
  );
}

export default App;
