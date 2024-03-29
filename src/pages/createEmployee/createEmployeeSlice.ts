import { createSlice } from '@reduxjs/toolkit';

export type employee = {
   id: string;
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

export type employeeListState = { employeeList: { [key: string]: employee } };

const initialState: employeeListState = {
   employeeList: {},
};

export const createEmployeeSlice = createSlice({
   name: 'employeeList',
   initialState,
   reducers: {
      addEmployee: (state, action) => {
         const newList = { ...state.employeeList };
         newList[action.payload.id] = action.payload.newEmployee;
         return { ...state, employeeList: newList };
      },
   },
});
