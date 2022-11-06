import "primereact/resources/themes/saga-purple/theme.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import "primeicons/primeicons.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Contact from "./Contact";
import Services from "./Services";
import Users from "./User";
import {ReactFinalFormDemo} from "./ReactFinalFormDemo";
import Department from "./menu-item/Department";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/form" element={<ReactFinalFormDemo/>} />
             <Route path="/department" element={<Department/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;