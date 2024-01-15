import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import EmployeeList from '@/pages/employeeList/EmployeeList';
import NavBar from '@/components/navBar/NavBar';

function App() {
   return (
      <Router>
         <NavBar>
            <main>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/employee-list" element={<EmployeeList />} />
               </Routes>
            </main>
         </NavBar>
      </Router>
   );
}

export default App;
