import './App.css';
import Header from './components/Header';
import News from './components/News';
import Panels from './components/Panels';
import Tabs from './components/Tabs';
import './default.css';

function App() {

  const loadPanels = (text) => {
    // alert(`active panel: ${text}`)
  }

  return (
    <div className="App">
      <Header />
      <Tabs returnActive={loadPanels} />
      <Panels />
      <News />
    </div>
  );
}

export default App;
