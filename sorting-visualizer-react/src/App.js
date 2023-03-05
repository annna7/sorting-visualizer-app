import './App.css';
import Header from './components/Header.js';
import SortingVisualizer from './components/SortingVisualizer.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <SortingVisualizer/>
      <Footer />
    </div>
  );
}

export default App;
