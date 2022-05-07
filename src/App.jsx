import { useState } from 'react';
import Folder from "./components/Folder";
import Explorer from "./Explorer";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Folder explorer={Explorer}/>
    </div>
  )
}

export default App
