import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from '@/pages/employeeList/EmployeeList';
import NavBar from '@/components/navBar/NavBar';
import CreateEmployee from '@/pages/createEmployee/CreateEmployee';

function App() {
   return (
      <Router>
         <NavBar>
            <main>
               <Routes>
                  <Route path="/" element={<CreateEmployee />} />
                  <Route path="/employee-list" element={<EmployeeList />} />
               </Routes>
            </main>
         </NavBar>
      </Router>
   );
}

export default App;
