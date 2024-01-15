import { Link } from 'react-router-dom';
import styles from './home.module.css';
import type { FormEvent } from 'react';
import states from '@/utils/states';

type employee = {
   firstName: string;
   lastName: string;
   dateOfBirth: string;
   startDate: string;
   department: string;
   street: string;
   city: string;
   state: string;
   zipCode: number;
};

const Home = () => {
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const firstName = e.currentTarget.firstName.value;
      const lastName = e.currentTarget.lastName.value;
      const dateOfBirth = e.currentTarget.dateOfBirth.value;
      const startDate = e.currentTarget.startDate.value;
      const department = e.currentTarget.department.value;
      const street = e.currentTarget.street.value;
      const city = e.currentTarget.city.value;
      const state = e.currentTarget.state.value;
      const zipCode = e.currentTarget.zipCode.value;

      const employee: employee = {
         firstName: firstName,
         lastName: lastName,
         dateOfBirth: dateOfBirth,
         startDate: startDate,
         department: department,
         street: street,
         city: city,
         state: state,
         zipCode: zipCode,
      };

      console.log(employee);
   };

   return (
      <div className={styles.container}>
         <h1>HRnet</h1>
         <Link to="employee-list">View Current Employees</Link>
         <h2>Create Employee</h2>
         <form
            className={styles.formContainer}
            onSubmit={(e) => handleSubmit(e)}
         >
            <div className={styles.subContainer}>
               <div className={styles.subContainerItems}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" />
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" />
                  {/* // DATE PICKER */}
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input id="dateOfBirth" type="text" />
                  {/* // DATE PICKER */}
                  <label htmlFor="startDate">Start Date</label>
                  <input id="startDate" type="text" />
               </div>
               <div className={styles.subContainerItems}>
                  <legend>Address</legend>
                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" />
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" />
                  <label htmlFor="state">State</label>
                  {/*  // DROPDOWN-MENU */}
                  <select name="state" id="state">
                     {states.map((el) => (
                        <option
                           key={`${el.abbreviation}-option`}
                           value={el.abbreviation}
                        >
                           {el.name}
                        </option>
                     ))}
                  </select>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input id="zipCode" type="number" />
               </div>
            </div>
            <label htmlFor="department">Department</label>
            <select name="department" id="department">
               <option>Sales</option>
               <option>Marketing</option>
               <option>Engineering</option>
               <option>Human Resources</option>
               <option>Legal</option>
            </select>
            <button type="submit" className={styles.button}>
               Save
            </button>
         </form>
         {/* // MODALE */}
         <div id="confirmation" className="modal">
            Employee Created!
         </div>
      </div>
   );
};

export default Home;
