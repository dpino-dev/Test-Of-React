import { Box, Stack, StackDivider, TabPanel, Table, Tbody, Td, Tr } from "@chakra-ui/react"



const Row = ({ name, value }) => {
    return <Tr>
        <Td>{name}</Td>
        <Td>{(value === '' || value === null) ? 'n/s' : value}</Td>
    </Tr>
}
export const MissionPanelLaunchDetails = ({ data }) => {
    return <TabPanel>
        <Stack divider={<StackDivider />} spacing={'4'}>
            <Box>
                <Table variant="striped">
                    <Tbody>
                        {
                            Object.keys(data).map((value, index) => {
                                return <Row key={value} name={<b>{value}</b>} value={data[value]} />
                            })
                        }
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    </TabPanel>

}