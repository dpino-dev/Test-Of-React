import { Box, Heading, Stack, StackDivider, TabPanel, Table, Tbody, Td, Tr } from "@chakra-ui/react"



const Row =  ({ name, value})=>{
    return <Tr>
        <Td>{name}</Td>
        <Td>{(value === '' || value=== null)? 'n/s': value }</Td>
    </Tr>
}


export const RocketPanelLaunchDetail = ( {data}) => {
    const {configuration} = data;
    const {launch_service_provider } = configuration;
    return <TabPanel> 
        <Stack divider={<StackDivider />} spacing={'4'}>
            <Box>
                <Heading size={"sm"} mb={2}>General</Heading>
                <Table variant="striped"> 
                    <Tbody>
                        <Row name={ <b>name</b>} value={ configuration.full_name} ></Row>
                        <Row name={ <b>description</b>} value={ configuration.description} ></Row>
                        <Row name={ <b>family</b>} value={ configuration.family} ></Row>
                        <Row name={ <b>variant</b>} value={ configuration.variant} ></Row>
                        <Row name={ <b>alias</b>} value={ configuration.alias} ></Row>
                    </Tbody>
                </Table>
            </Box>
            <Box>
                <Heading size={"sm"} mb={2}>Provider </Heading>
                <Table variant="striped">
                    <Tbody>
                        {
                            Object.keys( launch_service_provider).map(( value, index)=>{
                                return <Row  key={value} name={ <b>{value}</b>} value={launch_service_provider[value]}/>
                            })
                        }
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    </TabPanel>
    
}