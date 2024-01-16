import { useSelector } from 'react-redux';
import styles from './employeeList.module.css';
import { getEmployeeList } from '@/router/selectors';

const EmployeeList = () => {
   const employeeList = useSelector(getEmployeeList);
   console.log(employeeList);
   return (
      <div className={styles.container}>
         <h1>Current Employees</h1>
         <div className={styles.tabContainer}></div>
      </div>
   );
};

export default EmployeeList;
