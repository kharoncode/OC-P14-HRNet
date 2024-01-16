import styles from './createEmployee.module.css';
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

const CreateEmployee = () => {
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
         <h1>Create Employee</h1>
         <form
            className={styles.formContainer}
            onSubmit={(e) => handleSubmit(e)}
         >
            <div className={styles.subContainer}>
               <div className={styles.subContainerItems}>
                  <h3>Profile</h3>
                  <div className={styles.inputContainer}>
                     <label htmlFor="firstName">First Name</label>
                     <input type="text" id="firstName" />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="lastName">Last Name</label>
                     <input type="text" id="lastName" />
                  </div>
                  <div className={styles.inputContainer}>
                     {/* // DATE PICKER */}
                     <label htmlFor="dateOfBirth">Date of Birth</label>
                     <input id="dateOfBirth" type="text" />
                  </div>
                  <div className={styles.inputContainer}>
                     {/* // DATE PICKER */}
                     <label htmlFor="startDate">Start Date</label>
                     <input id="startDate" type="text" />
                  </div>
               </div>
               <div className={styles.subContainerItems}>
                  <h3>Address</h3>
                  <div className={styles.inputContainer}>
                     <label htmlFor="street">Street</label>
                     <input id="street" type="text" />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="city">City</label>
                     <input id="city" type="text" />
                  </div>
                  <div className={styles.inputContainer}>
                     {/*  // DROPDOWN-MENU */}
                     <label htmlFor="state">State</label>
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
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="zipCode">Zip Code</label>
                     <input id="zipCode" type="number" />
                  </div>
               </div>
            </div>
            <div className={styles.inputContainer}>
               <label htmlFor="department">Department</label>
               <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
               </select>
            </div>
            <input type="submit" value="save" className={styles.button} />
         </form>
         {/* // MODALE */}
         {/* <div id="confirmation" className="modal">
            Employee Created!
         </div> */}
      </div>
   );
};

export default CreateEmployee;
