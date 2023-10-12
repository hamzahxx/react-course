import './App.css';
let name = "Hamzah";

function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name} </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat repudiandae tempore sunt quis quod veniam, officiis voluptate, at recusandae soluta nulla, perferendis omnis veritatis fuga asperiores nisi. Neque minima atque est eum non?</p>
      </div>
    </>
  );
}

export default App;
