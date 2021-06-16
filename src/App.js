import './App.css';
import Article from "./components/Article"
import {Counter, TextInput, ToggleButton} from "./components/index"

function App() {
  const authorName = "山口良いいい"
  return (

    <div>
      {/* <Counter /> */}
      <ToggleButton />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       新・日本一わかりやすい
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //</div>
  );
}

export default App;
