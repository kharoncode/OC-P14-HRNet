import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from '@/pages/employeeList/EmployeeList';
import NavBar from '@/components/navBar/NavBar';
import CreateEmployee from '@/pages/createEmployee/CreateEmployee';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Router>
               <NavBar>
                  <main>
                     <Routes>
                        <Route path="/" element={<CreateEmployee />} />
                        <Route
                           path="/employee-list"
                           element={<EmployeeList />}
                        />
                     </Routes>
                  </main>
               </NavBar>
            </Router>
         </PersistGate>
      </Provider>
   );
}

export default App;
