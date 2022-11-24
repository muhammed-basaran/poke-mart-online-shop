import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <ul className="card-container">
        <Card />
      </ul>
    </div>
  );
}

export default App;
