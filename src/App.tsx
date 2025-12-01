import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListarDepartamentos from "./components/departamentos/listardepartamentos/ListarDepartamentos"
import FormDepartamento from "./components/departamentos/formdepartamento/FormDepartamento"
import DeletarDepartamento from "./components/departamentos/deletardepartamentos/DeletarDepartamento"
import ListarColaboradores from "./components/colaboradores/listarcolaboradores/ListarColaboradores"
import FormColaborador from "./components/colaboradores/formcolaborador/FormColaborador"
import DeletarColaborador from "./components/colaboradores/deletarcolaboradores/DeletarColaborador"
import RotaDetalhesColaborador from "./components/colaboradores/detalhescolaborador/RotaDetalhesColaborador"

type MenuState = 'closed' | 'open';

function App() {
  const [menuState, setMenuState] = useState<MenuState>('closed');
  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  const closeMenu = (): void => {
    setMenuState('closed');
  };

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          
          <Navbar 
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />
          
          <div className='flex-1 w-full pt-16 bg-slate-50'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/departamentos" element={<ListarDepartamentos />} />
              <Route path="/caddepartamento" element={<FormDepartamento />} />
              <Route path="/editardepartamento/:id" element={<FormDepartamento />} />
              <Route path="/deletardepartamento/:id" element={<DeletarDepartamento />} />
              <Route path="/colaboradores" element={<ListarColaboradores />} />
              <Route path="/colaborador/:id" element={<RotaDetalhesColaborador />} />
              <Route path="/cadcolaborador" element={<FormColaborador />} />
              <Route path="/editarcolaborador/:id" element={<FormColaborador />} />
              <Route path="/deletarcolaborador/:id" element={<DeletarColaborador />} />
            </Routes>
          </div>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    </>
  )
}

export default App