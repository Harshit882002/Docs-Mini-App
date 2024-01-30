import React from 'react';
import Background from './components/Background';
import Forground from './components/Forground';

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 text-black relative'>
    <Background/>
    <Forground/>
    </div>
  )
}

export default App
