import './App.css';
import './bootstrap.min.css'
import { BrowserRouter, Route } from "react-router-dom"
import CampoFlores from './components/CampoFlores'
import Jirasoles from './components/Jirasoles'
import Lago from './components/Lago'
import Montañas from './components/Moantañas'
import Nieve from './components/Nieve'
import Planetas from './components/Planetas'
import Universo from './components/Universo'
import Valdio from './components/Valdio'
import Navegacion from './components/Navegacion';

function App() {
  return (
    <BrowserRouter>
      <Route path="/CampoFlores" component={CampoFlores} />
      <Route path="/Jirasoles" component={Jirasoles} />
      <Route path="/Lago" component={Lago} />
      <Route path="/Montañas" component={Montañas} />
      <Route path="/Nieve" component={Nieve} />
      <Route path="/Planetas" component={Planetas} />
      <Route path="/Universo" component={Universo} />
      <Route path="/Valdio" component={Valdio} />
      <Navegacion/>
    </BrowserRouter>
  );
}

export default App;
