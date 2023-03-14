import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllRockets, selectedId } from '../Store/Slices/rocketslice'
import { Link } from 'react-router-dom';


export const LaunchList = () => {

  const { list } = useSelector(state => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRockets())
  }, [dispatch]);

  return (

    <Fragment>

      <div className='container mt-4'>
        <div className='row'>
          {
            (list.length === 0) ? (<h1><b>Error - Request failed with status code 429 wait... </b></h1>) :
              list.map((launch, index) =>
              (<div key={index} className="card mb-4" style={{ width: "18rem" }}>

                <img src="../logo192.png" className="card-img-top" alt="..." />

                <div className="card-body">

                  <h5 className="card-title">{launch.name}</h5>
                  <p className="card-text">ID: {launch.id}</p>
                  <p className="card-text">status: {launch.status.name}</p>
                  <p className="card-text">Service Provider: {launch.rocket.configuration.launch_service_provider}</p>
                  <Link to="/details"><button onClick={() => { dispatch(selectedId(launch.id)) }} className="btn btn-primary">Go to Details</button></Link>

                </div>
              </div>))
          }
        </div>
      </div>


    </Fragment>
  )
}

export default LaunchList;