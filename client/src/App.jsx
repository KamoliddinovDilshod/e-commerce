import Home from "./pages/Home/Home";
import "./main.css";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import Press from "./pages/Press/Press";
import Admin from "./pages/Admin/Admin";
import Delete from "./pages/AdminDelete/delete";
import Single from "./pages/Single/Single";

function App() {

  const token = window.localStorage.getItem("token");

  if (token) {
    return <Admin />;
  } else {
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/press' element={<Press />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/delete' element={<Delete />} />
          <Route path='/faq/:id' element={<Single />} />
        </Routes>
      </div>
    );
  }
}

export default App;
