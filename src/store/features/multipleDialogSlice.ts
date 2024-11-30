import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Dialog {
    dialogs: Array<[]>
}

const initialState: Dialog = {
    dialogs: []
}

export const MultipleDialogSlice = createSlice({
    name: "multipleDialog",
    initialState,
    reducers: {
        updateDialog: (state, action: PayloadAction<{newdia: Array<[]>}>) => {
            state.dialogs = action.payload.newdia
        
        }
    }
})

export default MultipleDialogSlice.reducer;
export const { updateDialog } = MultipleDialogSlice.actions