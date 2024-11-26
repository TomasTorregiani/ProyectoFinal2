import './App.css';
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NosotrosPage from "./pages/NosotrosPage"
import HomePage from "./pages/HomePage"
import NovedadesPage from "./pages/NovedadesPage"
import ContactoPage from "./pages/contactoPage"
import { ActividadesPage } from './pages/ActividadesPage';
import { ProductosPage } from './pages/ProductosPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/nosotros' element={<NosotrosPage/>}></Route>
          <Route path='/novedades' element={<NovedadesPage/>}></Route>
          <Route path='/contacto' element={<ContactoPage/>}></Route>
          <Route path='/actividades' element={<ActividadesPage/>}></Route>
          <Route path='/productos' element={<ProductosPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
