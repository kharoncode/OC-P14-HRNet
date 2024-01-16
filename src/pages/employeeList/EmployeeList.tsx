import { useSelector } from 'react-redux';
import styles from './employeeList.module.css';
import { getEmployeeList } from '@/router/selectors';
//import { DataBase } from 'hrnet-database';
import { DataBase } from '../../../../../packages/oc-p14-dataBase/src/dataBase';

const EmployeeList = () => {
   const employeeList = useSelector(getEmployeeList);
   console.log(employeeList);
   return (
      <div className={styles.container}>
         <h1>Current Employees</h1>
         <div className={styles.tabContainer}>
            <DataBase name={'bob'} />
         </div>
      </div>
   );
};

export default EmployeeList;
