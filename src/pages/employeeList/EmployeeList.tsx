import styles from './employeeList.module.css';

const EmployeeList = () => {
   return (
      <div className={styles.container}>
         <h1>Current Employees</h1>
         <div className={styles.tabContainer}></div>
      </div>
   );
};

export default EmployeeList;
