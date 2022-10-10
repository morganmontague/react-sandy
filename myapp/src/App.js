import logo from './logo.svg';
import './App.css';
// import  "./myapp/src/DALL·E 2022-10-04 13.20.50 - blurry underwater photo of a hammerhead shark swimming towards a school of fish.png"


let classes = "container-sm bg-success"
function AddContainer() {
  return (
  <><div className={classes}>Testing this out</div></>
  )
}

function TestingthisStupid() {
  return(
  <><div>This is so dumb</div></>
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
