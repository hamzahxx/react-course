import './App.css';
import Navbar from "./components/Navbar";

const Project = {
  name: "WolFit"
}

export default function defaultApp() {
  return (
    <div>
      <Navbar color="bg-main" title={Project.name}/>
      <div id="defaultHome" className="bg-main">
        
      </div>
    </div>
  );
}