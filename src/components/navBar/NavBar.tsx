import { Link, NavLink } from 'react-router-dom';
import styles from './navBar.module.css';
import addEmployeeIcone from '@assets/icones/userPlus.svg';
import employeeList from '@assets/icones/users.svg';

const NavBar = () => {
   return (
      <div className={styles.container}>
         <nav className={styles.menu}>
            <Link to="/">
               <h2>HRnet</h2>
            </Link>
            <NavLink
               to="/"
               className={({ isActive }) => (isActive ? styles.active : '')}
            >
               <div></div>
               <img src={addEmployeeIcone} alt="Create Employee" />
               <span>Create Employee</span>
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? styles.active : '')}
               to="/employee-list"
            >
               <div></div>
               <img src={employeeList} alt="Current Employees" />
               <span>Current Employees</span>
            </NavLink>
         </nav>
      </div>
   );
};

export default NavBar;
