import './App.css';
import Navbar from "./components/Navbar";

function defaultApp() {
  return (
    <div>
      <Navbar color="bg-main" title="WolFit"/>
      <div id="defaultHome" className="bg-main">

      </div>
    </div>
  );
}

export default defaultApp;