import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
