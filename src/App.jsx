import {useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';

function App() {
 
 
  useEffect(()=>{
    AOS.init();
  })

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<BaseLayout/>}>
      <Route index element={<Home/>} />
      {/* <Route path='about' element={<About />}/>
      <Route path='services' element={<Services />} />
      <Route path='contact' element={<Contact />} /> */}
    </Route>

  ))
  return (
    <RouterProvider router={router} />
  )
}

export default App