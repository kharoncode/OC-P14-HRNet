import { createSlice } from '@reduxjs/toolkit';

export type employee = {
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

export type employeeListState = { employeeList: employee[] };

const initialState: employeeListState = {
   employeeList: [],
};

export const createEmployeeSlice = createSlice({
   name: 'employeeList',
   initialState,
   reducers: {
      addEmployee: (state, action) => {
         const newEmployee = action.payload;
         const newList = [...state.employeeList];
         newList.push(newEmployee);
         return { ...state, employeeList: newList };
      },
   },
});
