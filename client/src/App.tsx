import './App.scss'
import { Routes, Route} from "react-router-dom";
import Adoption from './pages/Adoption/Adoption';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import LostAndFound from './pages/LostAndFound/LostAndFound';
import PetFacilities from './pages/PetFacilities/PetFacilities';
import PetServices from './pages/PetServices/PetServices';
import Login from './pages/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
      <div className='container'>
        <NavBar></NavBar>
        <div className="main">
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/events" element={<Events />} />
          <Route path="/petfacilities" element={<PetFacilities />} />
          <Route path="/petservices" element={<PetServices />} />
          <Route path="/lostandfound" element={<LostAndFound />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
     
  )
}

export default App
