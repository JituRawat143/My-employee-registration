import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    employeeStore:[],
}

const emploSlice = createSlice({
    name : 'myFunctions',
    initialState,
    reducers:{
        addEmployee:(state,action)=>{
            state.employeeStore.push(action.payload)
        },
        updateEmployee:(state,action)=>{
            const index = state.employeeStore.findIndex(emp=>emp.id===action.payload.id);
            if(index!==-1){
                state.employeeStore[index]= action.payload;
            }
        },
        deleteEmployee:(state,action)=>{
            state.employeeStore = state.employeeStore.filter(emp=>emp.id!==action.payload)
        }
    }
})
export const {addEmployee,updateEmployee,deleteEmployee} = emploSlice.actions;
export default emploSlice.reducer;