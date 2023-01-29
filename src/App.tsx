import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='containerParpado'>
        <div className="container">
          <div className='children'>
            <img src='https://us.123rf.com/450wm/tranac/tranac1506/tranac150600028/41497312-de-ojos-de-color-rosa-sangriento-del-extranjero-con-anillo-amarillo-alrededor-de-la-pupila.jpg?ver=6'/>
          </div>
        </div>
      </div>


      <div className='parpado'>
        <div className="container">
          <div className='children'>
            <img src='https://pm1.narvii.com/6245/2a1b41e0071adb4513f2a7183c759e6de4265824_hq.jpg'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
