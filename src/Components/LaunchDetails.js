import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Tag,
  Text,
  Spinner,
  Flex,
  Center,
  Square
} from '@chakra-ui/react'
import launch from './mock_launch.json'
import { RocketPanelLaunchDetail } from './RocketPanelLaunchDetail'
import { MissionPanelLaunchDetails } from './MissionPanelLaunchDetails '
import LaunchService, { getDetail } from './launchServices'

export const LaunchDetails = () => {

  const { id_details } = useSelector(state => state.rockets);
  const URLEndPoint = "https://spacelaunchnow.me/api/3.3.0/launch/"

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFakeDetail = async (id) => {
    setLoading(false)
    setData(launch)
  }

  const service = new LaunchService('https://spacelaunchnow.me/api/3.3.0/launch/')
  useEffect(() => {
    (async () => {
      //await getFakeDetail('25')    
      const result = await service.getByID( id_details);
      setLoading( false)
      if( result instanceof Error) {
        setError( result.message)
      } else {
        setData( result)
      }
    })()
  }, [])

  if (loading) {
    return <Flex mt={6} ml={6}>
      <Square >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Square>
      <Center w='200px'>
        <Text ><b>Data fetching...</b></Text>
      </Center>
    </Flex>
  }

  if (error) {
    return <Flex mt={6} ml={6}>
      <Center w='200px'>
        <Text fontSize='6xl'><b>{error}</b></Text>
      </Center>
    </Flex>
  }

  if (data) {
    return <Container mt={6} maxW='container.sm' >
      <Card>
        <CardHeader>
          <Heading size='md'>Launch detail</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing={'4'}>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                General
              </Heading>
              <Text pt='2' fontSize='sm'>
                <b>Name: </b>{data.name}
              </Text>
              <Tag colorScheme='green'><b>{data.status.name}</b></Tag>
            </Box>
            <Box>
              <Tabs variant='enclosed'>
                <TabList>
                  <Tab>Rocket </Tab>
                  <Tab>Mission</Tab>
                </TabList>
                <TabPanels>
                  <RocketPanelLaunchDetail data={data.rocket} />
                  <MissionPanelLaunchDetails data={data.mission} />
                </TabPanels>
              </Tabs>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  }
}

export default LaunchDetails;