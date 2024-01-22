import { useSelector } from 'react-redux';
import styles from './employeeList.module.css';
import { getEmployeeList } from '@/router/selectors';
//import { DataTable } from 'hrnet-packages';
import { DataTable } from '../../../../../packages/hrnet-packages/src/packages/DataTable/DataTable';

const columns = [
   { title: 'First Name', data: 'firstName' },
   { title: 'Last Name', data: 'lastName' },
   { title: 'Start Date', data: 'startDate' },
   { title: 'Department', data: 'department' },
   { title: 'Date of Birth', data: 'dateOfBirth' },
   { title: 'Street', data: 'street' },
   { title: 'City', data: 'city' },
   { title: 'State', data: 'state' },
   { title: 'Zip Code', data: 'zipCode' },
];

const EmployeeList = () => {
   const employeeList = useSelector(getEmployeeList);
   return (
      <div className={styles.container}>
         <h1>Current Employees</h1>
         <div className={styles.tabContainer}>
            <DataTable data={employeeList} columns={columns} />
         </div>
      </div>
   );
};

export default EmployeeList;
