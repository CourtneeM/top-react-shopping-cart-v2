import Home from './Components/Home.js';

function App(props) {
  return (
    <div className="App">
      <Home storeName={props.storeName} />
    </div>
  );
}

export default App;
