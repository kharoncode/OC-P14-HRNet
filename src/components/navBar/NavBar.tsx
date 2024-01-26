import { Link, NavLink } from 'react-router-dom';
import styles from './navBar.module.css';
import addEmployeeIcone from '@assets/icones/userPlus.svg';
import employeeList from '@assets/icones/users.svg';

const NavBar: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
   return (
      <div className={styles.container}>
         <nav className={styles.menu}>
            <Link to="/" className={styles.title}>
               <h2>HRNet</h2>
            </Link>
            <NavLink
               to="/"
               className={({ isActive }) => (isActive ? styles.active : '')}
            >
               <div className={styles.after}></div>
               <img src={addEmployeeIcone} alt="Create" />
               <span>Create Employee</span>
            </NavLink>
            <NavLink
               className={({ isActive }) => (isActive ? styles.active : '')}
               to="/employeeList"
            >
               <div className={styles.after}></div>
               <img src={employeeList} alt="List" />
               <span>Current Employees</span>
            </NavLink>
         </nav>
         {children}
      </div>
   );
};

export default NavBar;
