import { PayloadAction, createSlice } from "@reduxjs/toolkit";



interface Config {
    language: String
}

const initialState: Config = {
    language: "English"
}

export const LanguageSlice = createSlice({
    name: "LanguageSelection",
    initialState,
    reducers: {
        switchLanguage: (state, action: PayloadAction<{newLang: String}>) => {
            state.language = action.payload.newLang
        }
    }
})

export default LanguageSlice.reducer;
export const { switchLanguage } = LanguageSlice.actions