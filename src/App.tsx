import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, PendingMotion, ViewBase } from "./views";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/pendingmotion"
          element={
            <ViewBase children={<PendingMotion />} />
          }
        />
        <Route
          path="/"
          element={
            <ViewBase children={<Home />} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
