import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { Link } from 'react-router-dom';

import {
  SimpleGrid,
  Text
} from '@chakra-ui/react';

import { fetchAllLaunch } from './launchServices';
import { LaunchListItem } from './LaunchListItem';


export const LaunchList = () => {

  const { list } = useSelector(state => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch( fetchAllLaunch())
  }, [dispatch]);


  return (    
    <SimpleGrid minChildWidth='300px' padding={"10"}  spacing={"10"} >
      {
        list.length ===0 ? (<Text fontSize='6xl'><b>Error 429 - Too Many Requests</b></Text>):
        list.map(( launch)=>{
          return <LaunchListItem key={launch.id} data = {launch} />
        })
      }
    </SimpleGrid>
  )
}

export default LaunchList;