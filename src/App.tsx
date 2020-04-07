import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./components/Hello";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMousePosition from "./hook/useMousePositions";
import useURLLoader from "./hook/useURLLoader";

interface IShowRes {
  message: string,
  status: string
}
interface IThemProps {
  [key: string]: {color: string, background: string}
}
const themes:IThemProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const TheContext = React.createContext(themes.light)

function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowRes

  return (
    <div className="App">

      <TheContext.Provider value={themes.dark}>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
            loading ? <p>读取中....</p> : <img src={dogResult && dogResult.message} className="App-logo" alt="logo" />
          }
        </div>
        <p>
          显示useMousePosition X:{positions.y}，Y:{positions.y}
        </p>
        <p onClick={() => {
          setShow(!show)
        }}>
          显示MouseTracker
        </p>
        <Hello msg={'aaa'}></Hello>
        <LikeButton></LikeButton>
        {
          show?<MouseTracker></MouseTracker>:null
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      </TheContext.Provider>

    </div>
  );
}

export default App;
