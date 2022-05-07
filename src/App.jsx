import { useState } from 'react';
import Folderz from "./components/Folderz";
import Explorer from "./Explorer";
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Folderz explorer={Explorer}/>
    </div>
  )
}

export default App
