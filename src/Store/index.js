import { configureStore } from "@reduxjs/toolkit"

import rockets from "./Slices/rocketslice"

export default configureStore({
    reducer: {
        rockets
    }
})