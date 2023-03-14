import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const rocketslice = createSlice({
    name: "rockets",

    initialState: {
        list: [],
        id_details: "",
    },

    reducers: {
        actionSetRocketsList: (state, action) => {
            state.list = action.payload;
        },

        actionGetDetails: (state, action) => {
            state.id_details = action.payload;
        },
    }
})

export const { actionSetRocketsList, actionGetDetails } = rocketslice.actions;

export default rocketslice.reducer;

export const fetchAllRockets = () => async (dispatch) => {
    await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/`)
        .then((response) => {
            dispatch(actionSetRocketsList(response.data.results))
        })
        .catch((error) => { console.log(error) })
}

export const selectedId = (id) => (dispatch) => {

    dispatch(actionGetDetails(id));

}