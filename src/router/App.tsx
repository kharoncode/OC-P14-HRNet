import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import EmployeeList from '@/pages/employeeList/EmployeeList';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-list" element={<EmployeeList />} />
         </Routes>
      </Router>
   );
}

export default App;
