import { configureStore } from '@reduxjs/toolkit'
import { LanguageSlice } from './features/configSlice'
import { ContextMenuSlice } from './features/contextSlice'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { MultipleDialogSlice } from './features/multipleDialogSlice'


export const store = configureStore({
  reducer: {
    config: LanguageSlice.reducer,
    contextMenu: ContextMenuSlice.reducer,
    multipleDialog: MultipleDialogSlice.reducer
  },
})

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
