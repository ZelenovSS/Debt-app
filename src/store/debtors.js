import { createSlice } from "@reduxjs/toolkit";

export const debtorsSlice = createSlice({
  name: 'debtors',
  initialState: {
    list:[
      {
        id: 'b10ec5f6-d9ec-4270-ad43-8e11fc4e12e8',
        name: 'Иванов Иван Иванович',
        debt: 1000,
        status: false
      },
      {
        id: 'cdfc15cf-0c87-44df-9f6a-42438ba07e02',
        name: 'Юрьев Юрий Юрьевич',
        debt: 3000,
        status: false
      },
      {
        id: 'e11ee92a-addf-409e-909a-390dbaa51857',
        name: 'Петров Петр Петрович',
        debt: 5000,
        status: true
      }
    ]
  },
  reducers: {
    addDebtor: (state, action) => {
      state.list = [...state.list, action.payload]
    },
    updateDebtStatus: (state, action) => {
      state.list = state.list.map(debtor => {
        return debtor.id === action.payload
          ? { ...debtor, status: !debtor.status }
          : debtor
      })
    }
  }
})

export const { addDebtor, updateDebtStatus } = debtorsSlice.actions;
export default debtorsSlice.reducer;