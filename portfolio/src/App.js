import NavigationBar from './pages/navigationBar/NavigationBar';
import ParticlesBg from 'particles-bg'
import './App.css';

function App() {
  let config = {
    num: [4, 9],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["#ffffff", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15,  // or null,
    g: 1,    // gravity
  };

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
