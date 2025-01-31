import { RouterProvider } from "react-router";
import "./App.css";
import { GameStateProvider } from "./context/GameStateContext.tsx";
import { Routes } from "./routes";

function App() {
  return (
    <>
    <GameStateProvider>
      <RouterProvider router={Routes} ></RouterProvider>
    </GameStateProvider>
    </>
  );
}

export default App;
