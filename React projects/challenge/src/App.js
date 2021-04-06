import Navbar from './Components/NavBar';
import Aboutme from './Components/Aboutme';
import PROJECTS from './Components/PROJECTS';
import CONTACTME from './Components/CONTACTME';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Aboutme />
      <PROJECTS />
      <CONTACTME />
      <Footer />
    </div>
  );
}

export default App;
