import logo from './logo.svg';
import './App.css';
import DalleShark from './DalleShark.png'
import email from './images/email.png'


let classes = "container-sm bg-success"
function AddContainer() {
  return (
  <><div className={classes}>Testing this out</div></>
  )
}

function TestingthisStupid() {
  return(
  <><img className="image-thumbnail" src = {DalleShark} alt="shark" /> 
  <img className="image-thumbnail" src ={email} alt="email icon"/>
  
  </>

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
