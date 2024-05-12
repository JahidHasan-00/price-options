import { useState } from 'react'
import './App.css'
import AreaChart from './Components/AreaChart/AreaChart'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PieChartWithNeedle from './Components/PieChartWithNeedle/PieChartWithNeedle'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {
  const isRed = true;
  // const [color, setColor] = useState(true);
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-gray-400 bg-rose-600'>Price-Options</h1>
      <div className='container mx-auto space-y-6'>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <AreaChart></AreaChart>
        <PieChartWithNeedle></PieChartWithNeedle>
        <Phones></Phones>
      </div>
      <p className={`text-3xl text-center font-bold mt-8 ${isRed?'text-red-500': 'text-sky-500'}`}>Hello</p>
    </>
  )
}

export default App
