import NavigationBar from './pages/navigationBar/NavigationBar';
import Header from './pages/header/Header'
import './App.css';
import AboutMe from './pages/aboutMe/AboutMe';
import ParticlesBg from 'particles-bg'
import Technologies from './pages/tech/Technologies';

function App() {

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Header></Header>
      <ParticlesBg type="cobweb" bg={false} color="#9ed9f9" />
      <AboutMe></AboutMe>
      <Technologies></Technologies>
    </div>
  );
}

export default App;
