
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import RefName from './components/RefName/RefName'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {


  return (
    <>
     
      <h1 className='p-6 text-center font-bold text-3xl bg-pink-500'>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefName></RefName> */}
      <div className='text-3xl font-bold mt-10'>
      <Grandpa></Grandpa>
      </div>

    </>
  )
}

export default App
