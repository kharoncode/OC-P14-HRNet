import styles from './createEmployee.module.css';
import { useState, type FormEvent } from 'react';
import states from '@/utils/states';
import { createEmployeeSlice, type employee } from './createEmployeeSlice';
import { store } from '@/router/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-dropdown-select';

const CreateEmployee = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [birthDate, setBirthDate] = useState(new Date());
   const [selectedState, setSelectedState] = useState([
      { name: '', abbreviation: '' },
   ]);
   const [selectedDepartment, setSelectedDepartment] = useState([{ name: '' }]);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const firstName = e.currentTarget.firstName.value;
      const lastName = e.currentTarget.lastName.value;
      const dateOfBirth = birthDate.toLocaleDateString();
      const dateOfStartDate = startDate.toLocaleDateString();
      const department = selectedDepartment;
      const street = e.currentTarget.street.value;
      const city = e.currentTarget.city.value;
      const state = selectedState;
      const zipCode = e.currentTarget.zipCode.value;

      const employee: employee = {
         id: `${lastName}_${Date.now().toString()}`,
         firstName: firstName,
         lastName: lastName,
         dateOfBirth: dateOfBirth,
         startDate: dateOfStartDate,
         department: department[0].name,
         street: street,
         city: city,
         state: state[0].abbreviation,
         zipCode: zipCode,
      };
      store.dispatch(createEmployeeSlice.actions.addEmployee(employee));
      e.currentTarget.reset();
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
                     <input
                        className={styles.input}
                        type="text"
                        id="firstName"
                        required
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="lastName">Last Name</label>
                     <input
                        className={styles.input}
                        type="text"
                        id="lastName"
                        required
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="dateOfBirth">Date of Birth</label>
                     <DatePicker
                        className={styles.input}
                        showIcon
                        id="dateOfBirth"
                        selected={birthDate}
                        onChange={(date: Date) => setBirthDate(date)}
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="startDate">Start Date</label>
                     <DatePicker
                        className={styles.input}
                        showIcon
                        id="startDate"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                     />
                  </div>
               </div>
               <div className={styles.subContainerItems}>
                  <h3>Address</h3>
                  <div className={styles.inputContainer}>
                     <label htmlFor="street">Street</label>
                     <input
                        className={styles.input}
                        id="street"
                        type="text"
                        required
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="city">City</label>
                     <input
                        className={styles.input}
                        id="city"
                        type="text"
                        required
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="state">State</label>
                     <Select
                        values={[]}
                        options={states}
                        placeholder="Select your state"
                        labelField="name"
                        valueField="abbreviation"
                        searchBy="name"
                        color="#5955b3"
                        style={{
                           width: '180px',
                           backgroundColor: 'white',
                           paddingLeft: '10px',
                           fontSize: '0.9em',
                        }}
                        dropdownPosition="auto"
                        dropdownHeight="300px"
                        required
                        onChange={(values) => setSelectedState(values)}
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="zipCode">Zip Code</label>
                     <input
                        className={styles.input}
                        id="zipCode"
                        type="number"
                        required
                     />
                  </div>
               </div>
            </div>
            <div className={styles.inputContainer}>
               <label htmlFor="department">Department</label>
               <Select
                  values={[]}
                  options={[
                     { name: 'Sales' },
                     { name: 'Marketing' },
                     { name: 'Engineering' },
                     { name: 'Human Resources' },
                     { name: 'Legal' },
                  ]}
                  placeholder="Select"
                  labelField="name"
                  valueField="name"
                  searchBy="name"
                  color="#5955b3"
                  style={{
                     width: '180px',
                     backgroundColor: 'white',
                     paddingLeft: '10px',
                     fontSize: '0.9em',
                  }}
                  dropdownPosition="auto"
                  dropdownHeight="300px"
                  required
                  onChange={(values) => setSelectedDepartment(values)}
               />
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
