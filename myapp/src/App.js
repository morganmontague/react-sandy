import logo from './logo.svg';
import './App.css';
import DalleShark from './DalleShark.png'


let classes = "container-sm bg-success"
function AddContainer() {
  return (
  <><div className={classes}>Testing this out</div></>
  )
}

function TestingthisStupid() {
  return(
  <><img className="image-thumbnail" src = {DalleShark} alt="shark" /> </>
  )
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1 text-success">Hello World</h1>
        <AddContainer />
        <TestingthisStupid />
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
