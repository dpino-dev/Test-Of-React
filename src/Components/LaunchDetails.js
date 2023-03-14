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

export const LaunchDetails = () => {

  const { id_details } = useSelector(state => state.rockets);
  const URLEndPoint = "https://spacelaunchnow.me/api/3.3.0/launch/"

  const [data, SetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFakeDetail = async (id) => {
    setLoading(false)
    SetData(launch)
  }

  const getDetail = async (id) => {
    try {
      const res = await fetch(URLEndPoint + `${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      });
      if (res.status !== 200) {
        setLoading(false);
        throw new Error(`${res.status} - ${res.statusText}`)
      } else {
        setLoading(false)
        setError(null)
        SetData(await res.json())
      }

    }
    catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    (async () => {
      await getDetail(id_details);
      //await getFakeDetail('25')
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
        <Text ><b>{error}</b></Text>
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