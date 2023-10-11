import './App.css'
import { useState } from 'react';
function App() {
  const [color,setColor] = useState('skyblue')
  return (
    <>
      <div id="bgGround"  style={{backgroundColor:color}}>
        <div id="buttonBar">
          <button className='purple' onClick={() => setColor('purple')}>
            Blue
          </button>
          <button className='chocolate' onClick={() => setColor('chocolate')}>
            Red
          </button>
          <button className='pink' onClick={() => setColor('pink')}>
            Pink
          </button>
          <button className='yellow'
          onClick={() => setColor('orange')}>
            Yellow
          </button>
          <button className='magenta' onClick={() => setColor('magenta')}>
            Magenta
          </button>
          <button className='maroon' onClick={() => setColor('maroon')}>
            Maroon
          </button>
        </div>
      </div>
    </>
  )
}

export default App
