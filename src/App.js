import {Routes,Route, BrowserRouter} from "react-router-dom";
import LoginPage from "./loginPage";
import EmployeeForm from "./employeeForm";
import ErrorPage from "./errorPage";


function App() {

  return (
    <BrowserRouter>
        <Routes>

            <Route path="" element = {<LoginPage />} />
            <Route path="/employeeForm" element = {<EmployeeForm/>} /> 
            <Route path="*" element ={<ErrorPage/>} />

        </Routes>

    </BrowserRouter>
  );
}





export default App;
