import './App.css';
import Navbar from "./components/Navbar";
import TodoInput from './components/TodoInput';

const Project = {
  name: "WolFit"
}

export default function defaultApp() {
  return (
    <div className="bg-main">
      <Navbar color="bg-main" title={Project.name}/>
      <div id="defaultHome" className="container">
        <TodoInput />
      </div>
    </div>
  );
}