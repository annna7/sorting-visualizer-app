import './App.css';
import Header from './components/Header.js';
import SortingInterface from './components/SortingInterface.js'
import SortingVisualizer from './components/SortingVisualizer.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <SortingInterface/>
    </div>
  );
}

export default App;
