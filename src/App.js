import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
