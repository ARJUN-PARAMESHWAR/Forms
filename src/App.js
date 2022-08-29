import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from "./LoginPage";
import Formdetails from "./employeeform";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/employeeform" element={<Formdetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
