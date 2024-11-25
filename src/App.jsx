import './App.css'
import MainPage from './Pages/MainPage';
import Layout from './Components/Layout'
import ContactUs from "./Pages/ContactUs"
import About from "./Pages/About"
import Service from './Pages/Service';
import BlogPage from './Pages/BlogPage';
import Appointment from './Pages/Appointment';
import {createBrowserRouter,createRoutesFromChildren,Route,RouterProvider } from 'react-router-dom'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blogDetails" element={<BlogPage/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
        </Route>
    )
  );


  return (
    <>
  <RouterProvider router={router}/> 
    </>
  )
}

export default App
