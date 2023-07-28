import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import Tabs from "./components/Tabs";
import "./default.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <News />
    </div>
  );
}

export default App;
