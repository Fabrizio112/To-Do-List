import { createSlice } from "@reduxjs/toolkit";
import { helperUpdate } from "../helpers/functionHelperUpdate";

export const toDoListSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            return [...state, action.payload]
        },
        deleteToDo: (state, action) => {
            let listWithoutElementDeleted = state.filter((el) => el.id != action.payload)
            return [...listWithoutElementDeleted]
        },
        updateToDo: (state, action) => {
            const { id, todo } = action.payload
            let estadoEditado = helperUpdate(state, id, todo)
            return estadoEditado
        }


    }
});

export const { addToDo, deleteToDo, updateToDo } = toDoListSlice.actions
export default toDoListSlice.reducer

