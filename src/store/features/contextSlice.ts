import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface contextItem {
    type: String,
    x: number,
    y: number,
    width: number,
    height: number,
    data: any
}
interface ContextList {
    contextMenuList: contextItem[]
}

const initialState: ContextList = {
    contextMenuList: []
}

export const ContextMenuSlice = createSlice({
    name: "contextMenu",
    initialState,
    reducers: {
        updateContextList: (state, action: PayloadAction<{newContextList: contextItem[]}>) => {
            state.contextMenuList = action.payload.newContextList
        },
    }
})

export default ContextMenuSlice.reducer;
export const { updateContextList } = ContextMenuSlice.actions