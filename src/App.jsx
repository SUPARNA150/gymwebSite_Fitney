import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'


function App() {
  return (
    <>
    {/*
      <Navbar/>
      <Landing/>
  */}
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  )
}

export default App
