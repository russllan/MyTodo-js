import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: JSON.parse(localStorage.getItem('todo')) || [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.data.push({text: action.payload, status: false, id:Date.now()})
        },
        deleteTodo: (state, action) =>{
            const newArray = state.data.filter((item) => item.id !== action.payload)
            state.data = newArray
        },
        statusTodo: (state, action) => {
            const arrStatus = state.data.map((item) => {
                if(item.id === action.payload){
                  return { ...item, status: !item.status }
                }
                  return item
                })
            state.data = arrStatus
        },
        todoEdit: (state, action) => {
            const arrEdit = state.data.map((item) => {
                if(item.id === action.payload.id) {
                  return {...item, text: action.payload.newText}
                }
                return item
              })
              state.data = arrEdit
        }
    }
});

export const todoSliceReducer = todoSlice.reducer;
export const todoSliceActions = todoSlice.actions;