import { configureStore } from '@reduxjs/toolkit'
import ExtensionSlice from './redux/ExtensionSlice'

export const store = configureStore({
    reducer: {
        extension: ExtensionSlice
    },
    middleware: (getdefaultmiddleware) =>
        getdefaultmiddleware({
          serializablecheck: false,
        }),
  })