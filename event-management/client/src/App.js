import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard"
import Admin from "./components/Admin/Admin"
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Registered from "./components/Registered/Registered";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reg" element={<Registered/>} exact />
        <Route element={<PrivateRoutes />}>
        <Route path="/add-event" element={<Admin />} exact />
        </Route>
      </Routes>

    </>
  );
}

export default App;
