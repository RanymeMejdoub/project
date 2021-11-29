import './style.css';
import './App.css';
import myearth from './earthh.jpg'
function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="titleRed">  project </h1>
      <br />
      < img src="moonn.jpg" alt="this is the moon" width="400"/>
      <br />
      <img src={myearth} alt="this is the earth" width="400"></img>      
      </div> 
      
    </div>
  );
}

export default App;
