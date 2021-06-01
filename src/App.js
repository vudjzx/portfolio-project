import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
