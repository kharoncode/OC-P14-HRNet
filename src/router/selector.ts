import type { RootState } from './store';

export const getEmployeeList = (state: RootState) => {
   return state?.createEmployee.employeeList;
};
