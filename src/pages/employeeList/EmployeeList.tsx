import { useSelector } from 'react-redux';
import styles from './employeeList.module.css';
import { getEmployeeList } from '@/router/selectors';
//import { DataBase } from 'hrnet-database';
import { DataBase } from '../../../../../packages/hrnet-packages/src/packages/DataBase/DataBase';

const EmployeeList = () => {
   const employeeList = useSelector(getEmployeeList);
   return (
      <div className={styles.container}>
         <h1>Current Employees</h1>
         <div className={styles.tabContainer}>
            <DataBase employeeList={employeeList} />
         </div>
      </div>
   );
};

export default EmployeeList;
