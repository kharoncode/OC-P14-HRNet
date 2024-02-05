import styles from './createEmployee.module.css';
import { useState, type FormEvent } from 'react';
import states from '@/utils/states';
import { createEmployeeSlice, type employee } from './createEmployeeSlice';
import { store } from '@/router/store';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { Modal } from 'hrnet-packages';

const departmentOption = [
   { value: 'Sales', label: 'Sales' },
   { value: 'Marketing', label: 'Marketing' },
   { value: 'Engineering', label: 'Engineering' },
   { value: 'Human Resources', label: 'Human Resources' },
   { value: 'Legal', label: 'Legal' },
];

const CreateEmployee = () => {
   const [open, setOpen] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const [birthDate, setBirthDate] = useState(new Date());
   const [selectedState, setSelectedState] = useState('');
   const [selectedDepartment, setSelectedDepartment] = useState('');

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
      const id = `${lastName
         .toLowerCase()
         .replace(/'/g, '')
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, '')}_${Date.now().toString()}`;

      const newEmployee: employee = {
         id: id,
         firstName: firstName,
         lastName: lastName,
         dateOfBirth: dateOfBirth,
         startDate: dateOfStartDate,
         department: department,
         street: street,
         city: city,
         state: state,
         zipCode: zipCode,
      };
      const result = { id: id, newEmployee: newEmployee };
      store.dispatch(createEmployeeSlice.actions.addEmployee(result));
      e.currentTarget.reset();
      setOpen(true);
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
                  <h2>Profile</h2>
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
                        className={`${styles.input} ${styles.inputDate}`}
                        showIcon
                        id="dateOfBirth"
                        selected={birthDate}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={new Date()}
                        dropdownMode="select"
                        onChange={(date: Date) => setBirthDate(date)}
                     />
                  </div>
                  <div className={styles.inputContainer}>
                     <label htmlFor="startDate">Start Date</label>
                     <DatePicker
                        className={`${styles.input} ${styles.inputDate}`}
                        showIcon
                        id="startDate"
                        selected={startDate}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        onChange={(date: Date) => setStartDate(date)}
                     />
                  </div>
               </div>
               <div className={styles.subContainerItems}>
                  <h2>Address</h2>
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
                     <label htmlFor="states_select">States</label>
                     <Select
                        inputId="states_select"
                        className={styles.inputSelect}
                        classNamePrefix="select"
                        defaultValue={states[0]}
                        isClearable={true}
                        isSearchable={true}
                        name="color"
                        options={states}
                        onChange={(e) => {
                           if (e) {
                              setSelectedState(e.value);
                           }
                        }}
                        required
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
               <label htmlFor="department_select">Department</label>
               <Select
                  inputId="department_select"
                  className={styles.inputSelect}
                  classNamePrefix="select"
                  defaultValue={departmentOption[0]}
                  isClearable={true}
                  isSearchable={true}
                  name="color"
                  options={departmentOption}
                  onChange={(e) => {
                     if (e) {
                        setSelectedDepartment(e.value);
                     }
                  }}
                  required
               />
            </div>
            <input type="submit" value="save" className={styles.button} />
         </form>
         <Modal open={open} setOpen={setOpen}>
            <div>Employee Created !</div>
         </Modal>
      </div>
   );
};

export default CreateEmployee;
