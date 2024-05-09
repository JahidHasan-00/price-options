import './App.css'
import AreaChart from './Components/AreaChart/AreaChart'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-gray-400 bg-rose-600'>Price-Options</h1>
      <div className='container mx-auto space-y-6'>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <AreaChart></AreaChart>
      </div>
    </>
  )
}

export default App
