import { configureStore } from '@reduxjs/toolkit'
import employeemethods from '../loginAndRegistration/emploSlice'

export const store = configureStore({
  reducer: {
    employeeData: employeemethods,
    
  },
})
export default store;