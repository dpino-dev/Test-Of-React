import axios from 'axios'
import { actionSetLaunchList } from '../Store/Slices/rocketslice'


export const fetchAllLaunch = () => async (dispatch) => {
    await axios.get(`https://spacelaunchnow.me/api/3.3.0/launch/`)
        .then((response) => {
            dispatch(actionSetLaunchList(response.data.results))
        })
        .catch((error) => { console.log(error) })
}


export default class LaunchService {
    constructor( url) {
        this.url = url
        this.client = axios.create({
            baseURL:url
        })
    }
    async getByID( id) {
        try {
            const res =  await fetch(this.url + id, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
            });

            if( res.status !== 200) {
                throw new Error(`${res.status} - ${res.statusText}`)    
            }
            // console.log( res.status)
            //console.log( await res.json())
            return await res.json()
        } catch (error) {
            //Promise.error( error)
            return error;
        }
    }

    static getAll() {
        return  fetchAllLaunch()
    }
}